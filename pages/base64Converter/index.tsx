import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHammer, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { faCopy, faMoon } from '@fortawesome/free-regular-svg-icons';

import styles from './base64Converter.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Base64Converter() {
	const [filename, setFilename] = useState('No file chosen');

	return (
		<>
			<div className={cx('Header')}>
				<div className={cx('Header--logo')}>
					<FontAwesomeIcon icon={faHammer} className={cx('Header--logo__icon')} />
					<p className={cx('Header--logo__text')}>Base64 Converter</p>
				</div>
			</div>
			<div className={cx('Body')}>
				<div className={cx('Body--left_panel')}>
					<div className={cx('Options')}>
						<p className={cx('Options--title')}>Options</p>
						<div className={cx('Options--contents')}>
							<div className={cx('Options--contents__items')}>
								<p className={cx('Items--title')}>Mode</p>
								<select name="mode" className={cx('Items--content__options')}>
									<option value="img2base64">Image to Base64</option>
								</select>
							</div>
							<div className={cx('Options--contents__items')}>
								<p className={cx('Items--title')}>{filename}</p>
								<input type="file" className={cx('Items--content__options')} />
							</div>
						</div>
					</div>
					<hr />
					<div className={cx('Result')}>
						<div className={cx('Result--title')}>
							<p className={cx('Title--content')}>Result</p>
							<div className={cx('Result--functions')}>
								<button className={cx('Result--functions__items')}>
									<FontAwesomeIcon icon={faCopy} className={cx('Items--icons__functions')} />
									<p className={cx('Items--contents__functions')}>Copy</p>
								</button>
								<button className={cx('Result--functions__items')}>
									<FontAwesomeIcon icon={faRotateRight} className={cx('Items--icons__functions')} />
									<p className={cx('Items--contents__functions')}>Re-Convert</p>
								</button>
								<button className={cx('Result--functions__items')}>
									<FontAwesomeIcon icon={faDownload} className={cx('Items--icons__functions')} />
									<p className={cx('Items--contents__functions')}>Download</p>
								</button>
							</div>
						</div>
						<div className={cx('Result--contents')}>
							<textarea className={cx('Result--content__item')} placeholder="Nothing here"></textarea>
						</div>
					</div>
				</div>
				<div className={cx('Body--right_panel')}>
					<div className={cx('Preview')}>
						<p className={cx('Preview--title')}>Preview Image</p>
						{filename == 'No file chosen' ? (
							<div className={cx('Preview--content__no_image')}>
								<p>Nothing here</p>
							</div>
						) : (
							<img className={cx('Preview--content')} />
						)}
					</div>
				</div>
			</div>
			<div className={cx('DarkMode')}>
				<button className={cx('DarkMode--btn')}>
					<FontAwesomeIcon icon={faMoon} />
				</button>
				<div className={cx('DarkMode--tooltip')}>Switch to Darkmode</div>
			</div>
		</>
	);
}

export default Base64Converter;
