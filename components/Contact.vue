<script setup lang="ts">
  interface FormContact {
    email: string;
    phone: string;
    message: string;
  }

  const formContact: FormContact = reactive({
    email: '',
    phone: '',
    message: '',
  });

  const sendForm = () => {
    alert('Votre message a bien été envoyé');
  };
</script>

<template>
  <div id="contact">
    <h1>Contact</h1>
    <el-form label-position="top">
      <el-row :gutter="16">
        <el-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
          <el-form-item label="Email">
            <el-input v-model="formContact.email" placeholder="coconrd@icloud.com" clearable />
          </el-form-item>
        </el-col>
        <el-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
          <el-form-item label="Téléphone">
            <el-input v-model="formContact.phone" placeholder="06060606060" clearable />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="Message">
        <el-input
          v-model="formContact.message"
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
        <el-button type="primary" @click="sendForm">Envoyer</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<style lang="scss">
  #contact {
    height: 100%;
    margin: 0 20px;
    margin-bottom: 250px;
    h1 {
      font-size: var(--font-size-title);
      color: var(--el-text-white);
      margin-bottom: 40px;
    }

    @media screen and (max-width: 768px) {
      height: 100%;
      margin-bottom: 50px;
      h1 {
        font-size: var(--font-size-title-mobile);
      }
    }
  }
</style>
