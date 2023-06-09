'use client';
//this is side panel with the step numbers, tenary used to set classes of based on step's number
export default function Aside({ step }) {

    return (
        <aside id="steps-guide">
            <ul id="step-list">
            <li className="guide-item" >
                <section className={step === 1 ? "step-no activeStep" : "step-no"}>
                    <p className="number">1</p>
                </section>
                <section className="aside-step-headings">
                    <h2 className="aside-step-h1">
                        Step 1
                    </h2>
                    <h3 className="aside-step-h2">
                        Your info
                    </h3>
                </section>
            </li>
            <li className="guide-item" >
                <section className={step === 2 ? "step-no activeStep" : "step-no"}>
                <p className="number">2</p>
                </section>
                <section className="aside-step-headings">
                    <h2 className="aside-step-h1">
                        Step 2
                    </h2>
                    <h3 className="aside-step-h2">
                        Select plan
                    </h3>
                </section>
            </li>
            <li className="guide-item" >
                <section className={step === 3 ? "step-no activeStep" : "step-no"}>
                <p className="number">3</p>
                </section>
                <section className="aside-step-headings">
                    <h2 className="aside-step-h1">
                        Step-3
                    </h2>
                    <h3 className="aside-step-h2">
                        Add-ons
                    </h3>
                </section>
            </li>
            <li className="guide-item" >
                <section className={step === 4 ? "step-no activeStep" : "step-no"}>
                <p className="number">4</p>
                </section>
                <section className="aside-step-headings">
                    <h2 className="aside-step-h1">
                        Step 4
                    </h2>
                    <h3 className="aside-step-h2">
                        Summary
                    </h3>
                </section>
            </li>
            </ul>
        </aside>
    )
}
