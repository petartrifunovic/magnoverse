'use strict';

// Scroll Into View



const btnScrollTo = document.querySelector('.header__move-btn');
const homeBtn = document.querySelectorAll('.home-btn');
const aboutBtn = document.querySelectorAll('.about-btn');
const roadmapBtn = document.querySelectorAll('.roadmap-btn');
const teamBtn = document.querySelectorAll('.team-btn');
const faqBtn = document.querySelectorAll('.faq-btn');
const contactBtn = document.querySelectorAll('.contact-btn');

const home = document.querySelector('.header');
const sectionAbout = document.querySelector('.section-about');
const sectionRoadmap = document.querySelector('.section-roadmap');
const sectionTeam = document.querySelector('.section-team');
const sectionFaq = document.querySelector('.section-faq');
const sectionContact = document.querySelector('.section-contact');

btnScrollTo.addEventListener('click', () => {
  sectionAbout.scrollIntoView({ behavior: 'smooth' });
});

homeBtn.forEach(el => {
  el.addEventListener('click', () => {
    home.scrollIntoView({ behavior: 'smooth' });
  });
});

aboutBtn.forEach(el => {
  el.addEventListener('click', () => {
    sectionAbout.scrollIntoView({ behavior: 'smooth' });
  });
});

roadmapBtn.forEach(el => {
  el.addEventListener('click', () => {
    sectionRoadmap.scrollIntoView({ behavior: 'smooth' });
  });
});

teamBtn.forEach(el => {
  el.addEventListener('click', () => {
    sectionTeam.scrollIntoView({ behavior: 'smooth' });
  });
});

faqBtn.forEach(el => {
  el.addEventListener('click', () => {
    sectionFaq.scrollIntoView({ behavior: 'smooth' });
  });
});

contactBtn.forEach(el => {
  el.addEventListener('click', () => {
    sectionContact.scrollIntoView({ behavior: 'smooth' });
  });
});
