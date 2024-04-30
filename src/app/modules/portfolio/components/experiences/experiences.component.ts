import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary :{
        strong:"Desenvolvedor FullStack",
        p: "Escolar Manager | JUN 2023 - Present"
      },
      text:" <p>Desde junho de 2023, trabalho como Desenvolvedor de Software FullStack na Escolar Manager, onde comecei como estagiário. Minha principal responsabilidade envolve a manutenção do software, juntamente com melhorias e personalizações do boletim/histórico escolar, utilizando a biblioteca iTextSharp. Além disso, utilizamos no gerenciamento de banco de dados, Firebird/DBeaver. Nosso produto é principalmente desenvolvido em C# ASP.NET, com adições de JavaScript para aprimorar a interatividade do cliente. No front-end, adotamos a abordagem de componentização usando C#. </p>"
    }
  ])
}
