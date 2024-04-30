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
      src: 'assets/icons/knowledge/csharp.svg',
      alt: 'Icone de conhecimento de CSharp',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento de Angular',
    },
    {
      src: 'assets/icons/knowledge/ts.svg',
      alt: 'Icone de conhecimento de TypeScript',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de conhecimento de JavaScript',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento de CSS3',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento de CSharp',
    },
  ])
}
