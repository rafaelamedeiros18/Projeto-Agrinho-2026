const tips = [
  'A rotação de culturas ajuda a manter o solo fértil e reduz a incidência de pragas.',
  'Plantas de cobertura protegem o solo da erosão e enriquecem a matéria orgânica.',
  'A economia circular no campo reaproveita resíduos e diminui o desperdício de água.',
  'Preservar nascentes garante água limpa para a produção e para a comunidade rural.',
  'O manejo integrado de pragas reduz o uso de defensivos e protege a biodiversidade.'
];

const tipText = document.getElementById('tipText');
const newTipButton = document.getElementById('newTipButton');
const quizOptions = document.querySelectorAll('.quiz-options button');
const quizResult = document.getElementById('quizResult');

function mostrarNovaDica() {
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipText.textContent = tips[randomIndex];
}

function responderQuiz(event) {
  const isCorrect = event.currentTarget.dataset.answer === 'true';
  quizResult.textContent = isCorrect ? 'Correto! Rotação de culturas ajuda o solo.' : 'Tente novamente: prefira práticas que renovem o solo.';
  quizResult.style.color = isCorrect ? '#1c4f32' : '#b43d3d';
}

newTipButton.addEventListener('click', mostrarNovaDica);
quizOptions.forEach(button => button.addEventListener('click', responderQuiz));
window.addEventListener('DOMContentLoaded', mostrarNovaDica);
