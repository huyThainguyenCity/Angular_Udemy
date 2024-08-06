import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enterInitialInvestMent = signal('0');
  enterAnnualInvestMent = signal('0');
  enterExpectedReturn = signal('5');
  enterDuration = signal('10');

  constructor(private investmentService: InvestmentService){

  }

  onSubmit() {
    console.log('submit');
    console.log(this.enterAnnualInvestMent);
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.enterInitialInvestMent(),
      duration: +this.enterDuration(),
      expectedReturn: +this.enterExpectedReturn(),
      annualInvestment: +this.enterAnnualInvestMent(),
    });
    //Đặt lại giá trị về 0 khi ấn "submit"
    // this.enterInitialInvestMent.set('0');
    // this.enterAnnualInvestMent.set('0');
    // this.enterExpectedReturn.set('0');
    // this.enterDuration.set('0');
  }
}
