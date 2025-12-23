/*// script.js - Lógica centralizada para API e navegação
const API_URL = "https://sua-api.com"; // Substitua pela URL real da API

// Função para requisições à API
async function apiRequest(endpoint, method = "GET", data = null) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : null
  };
  
  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    return await response.json();
  } catch (error) {
    console.error("Erro na API:", error);
    alert("Erro ao conectar com o servidor!");
  }
}

// Navegação simples
function navigateTo(page) {
  window.location.href = page;
}

// Inicializar comportamentos comuns (como botão de voltar)
document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.querySelector("#back-button");
  if (backButton) {
    backButton.addEventListener("click", () => window.history.back());
  }
});*/