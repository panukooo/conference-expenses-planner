import React from 'react';
import './welcomePage.css';

const WelcomePage = (props) => {

    return(
        <section className="flex-welcome">
            <div className="flex-container-1">
                <h1>Conference Expense Planer</h1>
                <p>Plan your next major event with us</p>
                <button onClick={() => {props.handleNav(true)}}>Get Started</button>
            </div>
            <div className="flex-container-2">
                <p>Our free budget calculator will help you to know exactly where your money is being spent, and how much you’ve got coming in. Knowing how to manage a budget – keep track of where every pound is being spent – is a great first step to starting your savings, getting out of debt or preparing for retirement. Our free Budget Planner can help.

                We’ll give you:

                a place to record all your spending, so you won’t forget anything
                a breakdown of your finances by category
                personalised tips when you’re all finished.
                Access your saved budget plan
                Now we’ve moved to MoneyHelper you can be sure we’ve kept your information safe.  You can still access your saved budget plan using your Money Advice Service log-in details – on the next screen just choose Access your saved Budget Plan.</p>
            </div>
        </section>
    );
}


export default WelcomePage;