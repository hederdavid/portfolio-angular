import { Component, signal } from '@angular/core';

//Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento HTML5'
    },

    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento CSS3'
    },

    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento Javascript'
    },

    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento Java'
    },

    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento Angular'
    },

    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'Ícone de conhecimento Spring '
    },

    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento SASS'
    }

    
  ])

}
