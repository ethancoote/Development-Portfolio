const skillImgElem = document.querySelector('#skill-img') as HTMLImageElement;
const skillTextElem = document.querySelector('#skill-text') as HTMLParagraphElement;
const hoverableSkillsList = document.querySelectorAll('.skillHover') as NodeListOf<HTMLDivElement>;

hoverableSkillsList.forEach((skill) => {
    skill.addEventListener("mouseenter", () => {
        const skillImg = skill?.children[0] as HTMLImageElement;
        const skillText = skill?.children[1] as HTMLParagraphElement;
        const img = skillImg.src;
        const alt = skillImg.alt;
        const text = skillText.textContent;

        skillImgElem.src = img;
        skillImgElem.alt = alt;
        skillTextElem.textContent = text;
    });
});