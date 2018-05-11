import { css } from 'styled-components';

function getMaterial(styleCode) {
	switch (styleCode) {
		case 1:
			return `
				box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
				transition: all 0.3s cubic-bezier(.25,.8,.25,1);

				&:hover {
					box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
				}
			`;
		case 2:
			return `
				box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
			`;
		case 3:
			return `
				box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
			`;
		case 4:
			return `
				box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
			`;
		case 5:
			return `
				box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
			`;
		default: return '';
		}
}

export function getDivBorder(styleCode) {
	return `
		background: #fff;
		border-radius: 2px;
		${getMaterial(styleCode)}
	`;
}


/**
 * Map of screen widths associated with each of:
 * desktop, tablet, and phone
 */
const sizes = {
	desktop: 992,
	tablet: 768,
	phone: 376,
};

/**
 * Sets CSS media queries based on the appropriate screen size and size mapping
 * @param {object} sizes the 'break points' for each size - desktop, tablet, and phone
 */
export const responsive = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
	  @media (max-width: ${sizes[label] / 16}em) {
		${css(...args)}
	  }
	`;
	return acc;
}, {});
