import './index.css';

export const Skillbar = ({ percentage = 95, mainText = '' } = {}) => {
  return /*html*/ `
        <div class='skillbar'>
           <h6 class = 'skillbar-title'>${mainText}</h6>
           <h6 class = 'skillbar-percentage'>${percentage}%</h6>
           <div class = 'skillbar-bar'>
                <div class = 'skillbar-child' style = "width: ${percentage}%"></div>
           </div>
        </div>
        `;
};
