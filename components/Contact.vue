<script setup lang="ts">
  import type { FormInstance, FormRules } from 'element-plus';
  import emailjs from '@emailjs/browser';

  const runtimeConfig = useRuntimeConfig();

  interface FormContact {
    email: string;
    phone: string;
    message: string;
  }

  const ruleFormRef = ref();
  const emailSend = ref(false);

  const formContact: FormContact = reactive({
    email: '',
    phone: '',
    message: '',
  });

  const rules = reactive<FormRules>({
    email: [
      {
        required: true,
        message: 'Veuillez entrer votre email',
        trigger: 'blur',
      },
      {
        type: 'email',
        message: 'Veuillez entrer un email valide',
        trigger: ['blur', 'change'],
      },
    ],
    phone: [
      {
        required: true,
        message: 'Veuillez entrer votre numéro de téléphone',
        trigger: 'blur',
      },
      {
        pattern: /^((\+)33|0)[1-9](\d{2}){4}$/,
        message: 'Veuillez entrer un numéro de téléphone valide',
        trigger: ['blur', 'change'],
      },
    ],
    message: [
      {
        required: true,
        message: 'Veuillez entrer votre message',
        trigger: 'blur',
      },
    ],
  });

  const sendForm = async () => {
    if (ruleFormRef.value) {
      await ruleFormRef.value.validate((valid: any) => {
        if (valid && ruleFormRef.value) {
          emailjs
            .sendForm(
              runtimeConfig.public.serviceEmail,
              runtimeConfig.public.templateEmail,
              '#form',
              runtimeConfig.public.keyEmail
            )
            .then(() => {
              ElMessage({
                message: 'Votre message a bien été envoyé !',
                type: 'success',
              });
            })
            .catch(() => {
              ElMessage({
                message: 'Une erreur est survenue, veuillez réessayer plus tard',
                type: 'error',
              });
            })
            .finally(() => {
              ruleFormRef.value.resetFields();
              emailSend.value = true;
              document.cookie = 'emailsend=true';
            });
        }
      });
    }
  };

  onMounted(() => {
    const cookie = document.cookie;
    const emailAlreadySend = cookie.includes('emailsend=true');
    if (emailAlreadySend) {
      emailSend.value = true;
    }
  });
</script>

<template>
  <div id="contact">
    <h1>Contact</h1>
    <el-form id="form" ref="ruleFormRef" :model="formContact" :rules="rules" label-position="top">
      <el-row :gutter="16">
        <el-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
          <el-form-item label="Email" prop="email">
            <el-input v-model="formContact.email" name="email" placeholder="coconrd@icloud.com" clearable />
          </el-form-item>
        </el-col>
        <el-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
          <el-form-item label="Téléphone" prop="phone">
            <el-input v-model="formContact.phone" name="phone" placeholder="06060606060" clearable />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="Message" prop="message">
        <el-input
          v-model="formContact.message"
          name="message"
          type="textarea"
          placeholder="Votre message"
          maxlength="1000"
          show-word-limit
          :rows="8"
          resize="none"
          clearable
        />
      </el-form-item>
      <el-row justify="end">
        <el-button type="primary" :disabled="emailSend ? true : false" @click="sendForm">Envoyer</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<style lang="scss">
  #contact {
    height: 100%;
    margin: 0 20px;
    // margin-bottom: 250px;
    h1 {
      font-size: var(--font-size-title);
      color: var(--el-text-white);
      margin-bottom: 40px;
    }
    form {
      padding: 0 20px;
    }

    @media screen and (max-width: 768px) {
      height: 100%;
      margin-bottom: 50px;
      h1 {
        font-size: var(--font-size-title-mobile);
      }
      form {
        padding: 0 0;
      }
    }
  }
</style>
