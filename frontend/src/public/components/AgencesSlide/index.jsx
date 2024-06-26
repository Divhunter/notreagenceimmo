import React from 'react'
import { useState } from 'react'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-agences-slide.css'
import './d-agences-slide.css'

const AgencesSlide = () => {  

    const slideText = [
        {
            title: "DIRIGEANTS",
            name: "Aaron DIVIOKA",
            role: "Directeur général associé",
            email: "vowd-sv@outlook.com",
            name2: "Monique DIVIOKA",
            role2: "Directrice générale associée",
            email2: "vowd-sv@outlook.com"
        },
        {
            title:"SERVICE GESTION",
            name: "Pierre DIVIOKA",
            role: "Assistant de gestion",
            email: "vowd-sv@outlook.com",
            name2: "Samuel DIVIOKA",
            role2: "Gestionnaire locative",
            email2: "vowd-sv@outlook.com",
            name3: "David DIVIOKA",
            role3: "Gestionnaire locative",
            email3: "vowd-sv@outlook.com",
            name4: "Isaak DE LAFAUSSE",
            role4: "Gestionnaire technique",
            email4: "vowd-sv@outlook.com",
            name5: "Piero DE LAFAUSSE",
            role5: "Gestionnaire technique",
            email5: "vowd-sv@outlook.com"
        },
        {
            title:"SERVICE LOCATION",
            name: "Noam DIVIOKA",
            role: "Conseillère location",
            email: "vowd-sv@outlook.com",
            name2: "Eden DIVIOKA",
            role2: "Conseiller location",
            email2: "vowd-sv@outlook.com"
        },
        {
            title:"SERVICE TRANSACTION",
            name: "Yoni DIVIOKA",
            role: "Directeur commercial",
            email: "vowd-sv@outlook.com"
        }
    ]

    const textLength = slideText.length // Définition de la longueur de l'objet Carrousel

	let [currentText, setCurrentText] = useState(0) // Définition du state

	// Définition de la fonction pour aller à l'image suivante du carrousel (+1 à currentPic)
	const nextText = () => {
		setCurrentText(currentText === textLength - 1 ? 0 : currentText + 1);
	}

	// Définition de la fonction pour aller à l'image précédente du carrousel (-1 à currentPic)
	const prevText = () => {
		setCurrentText(currentText === 0 ? textLength - 1 : currentText - 1);
	}

    const dot1 = () => {
        setCurrentText(currentText = 0)
    }

    const dot2 = () => {
        setCurrentText(currentText = 1)
    }

    const dot3 = () => {
        setCurrentText(currentText = 2)
    }

    const dot4 = () => {
        setCurrentText(currentText = 3)
    }

    return (
        <div className='agences-slide'>
            <div 
                id='agences-slide__filtre' 
                className='agences-slide__filtre'
            >
                {textLength > 1 ? (
                    <>
                        <FontAwesomeIcon
                            className='agences-slide__filtre__arrow agences-slide__filtre__arrow__left' 
                            icon={faChevronLeft}
                            onClick={prevText} 
                        />
                        <FontAwesomeIcon
                            className='agences-slide__filtre__arrow agences-slide__filtre__arrow__right' 
                            icon={faChevronRight}
                            onClick={nextText} 
                        />
                    </>
                ) : null}
                {slideText.map((items, index) => (
                <div key={index}>
                    <p 
                        className={
                        index === currentText ? 'agences-slide__filtre__text text-visible' : 'agences-slide__filtre__text text-hidden'}
                        >
                        <span className='agences-title'>{items.title}</span>
                        <br/><br/>
                        {items.name}
                        <br/>
                        {items.role}
                        <br/>
                        <a className="agences-slide__filtre__text__mail" href={`mailto:${items.email}`}>{items.email}</a>
                        <br/>
                        <br/>
                        {items.name2}
                        <br/>
                        {items.role2}
                        <br/>
                        <a className="agences-slide__filtre__text__mail" href={`mailto:${items.email2}`}>{items.email2}</a>
                        <br/>
                        <br/>
                        {items.name3}
                        <br/>
                        {items.role3}
                        <br/>
                        <a className="agences-slide__filtre__text__mail" href={`mailto:${items.email3}`}>{items.email3}</a>
                        <br/>
                        <br/>
                        {items.name4}
                        <br/>
                        {items.role4}
                        <br/>
                        <a className="agences-slide__filtre__text__mail" href={`mailto:${items.email4}`}>{items.email4}</a>
                        <br/>
                        <br/>
                        {items.name5}
                        <br/>
                        {items.role5}
                        <br/>
                        <a className="agences-slide__filtre__text__mail" href={`mailto:${items.email5}`}>{items.email5}</a>
                    </p>
                    <div className='agences-slide__filtre__container__dote'>
                        <div 
                            id='dot1' 
                            className={
                            currentText === 0 ? 'dot dot-active' : 'dot dot-inactive'}
                            onClick={dot1} >
                        </div>
                        <div 
                            id='dot2' 
                            className={
                            currentText === 1 ? 'dot dot-active' : 'dot dot-inactive'}
                            onClick={dot2} > 
                        </div>
                        <div 
                            id='dot3' 
                            className={
                            currentText === 2 ? 'dot dot-active' : 'dot dot-inactive'}
                            onClick={dot3} >
                        </div>
                        <div 
                            id='dot3' 
                            className={
                            currentText === 3 ? 'dot dot-active' : 'dot dot-inactive'}
                            onClick={dot4} >
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    ) 
}

export default AgencesSlide