// Utilitaires et fonctions helpers
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('fr-FR')
}

export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}
