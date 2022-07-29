import './index.css';

export const SkillBar = ({ percentage = '', mainText = '' } = {}) => {
  return /*html*/ `
        <div class='skill-bar'>
           <h6 class = 'skill-bar-title'>${mainText}</h6>
           <h6 class = 'skill-bar-percentage'>${percentage}%</h6>
           <div class = 'container-skill-bar'>
                <div class = 'skill-bar-child' style = "width: ${percentage}%"></div>
           </div>
        </div>
        `;
};
