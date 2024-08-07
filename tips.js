const tips = [
    {
        title: "Recycle Electronics Properly",
        content: "Ensure that old electronics are recycled properly to prevent harmful chemicals from entering the environment. Look for certified e-waste recycling facilities."
    },
    {
        title: "Donate Usable Electronics",
        content: "If your old electronics are still usable, consider donating them to schools, charities, or other organizations. This helps extend the life of the device and benefits others."
    },
    {
        title: "Buy Environmentally Friendly Electronics",
        content: "When purchasing new electronics, look for products that are energy-efficient and have a smaller environmental impact. Check for certifications like Energy Star."
    },
    {
        title: "Avoid Disposable Electronics",
        content: "Choose durable, high-quality electronics that are built to last. Avoid products designed for short-term use or those that are not repairable."
    },
    {
        title: "Educate Others",
        content: "Spread awareness about the importance of e-waste management and encourage others to recycle and reuse electronics responsibly. Share tips and best practices."
    },
    {
        title: "Participate in E-Waste Collection Drives",
        content: "Take part in local e-waste collection drives and events to ensure proper disposal and recycling of electronic waste. These events often accept items that are not accepted by regular recycling programs."
    },
    {
        title: "Repair Instead of Replace",
        content: "Consider repairing damaged electronics instead of replacing them. Many components can be fixed or upgraded, which is often cheaper and more environmentally friendly."
    },
    {
        title: "Use Certified E-Waste Recyclers",
        content: "Make sure to use certified e-waste recyclers who follow environmentally friendly practices and regulations. This ensures your e-waste is handled properly and safely."
    }
   
];

const tipsContainer = document.getElementById('tips-container');

function displayTips() {
    tips.forEach((tip, index) => {
        const tipCard = document.createElement('div');
        tipCard.className = 'tip-card';
        tipCard.innerHTML = `
            <h2>${tip.title}</h2>
            <p>${tip.content}</p>
        `;
        tipsContainer.appendChild(tipCard);

        // Animation to make tips appear one by one
        setTimeout(() => {
            tipCard.classList.add('visible');
        }, index * 200);
    });
}

document.addEventListener('DOMContentLoaded', displayTips);
