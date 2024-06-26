import { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import { faChevronDown, faChevronUp, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './m-formulaireRecherche.css'
import './d-formulaireRecherche.css'

const FormulaireRecherche = () => {

  const navigate = useNavigate() 

  const [operations, setOperations] = useState([])
  const [selectAllOperations, setSelectAllOperations] = useState(false)

  const [typesBiens, setTypesBiens] = useState([])
  const [selectAllTypesBiens, setSelectAllTypesBiens] = useState(false)

  const [nombrePieces, setNombrePieces] = useState([])
  const [selectAllNombrePieces, setSelectAllNombrePieces] = useState(false)

  const [localisations, setLocalisations] = useState([])
  const [selectAllLocalisations, setSelectAllLocalisations] = useState(false)

  const [prix, setPrix] = useState([])
  const [selectAllPrix, setSelectAllPrix] = useState(false)

  const [openWindow, setOpenWindow] = useState(null)

  const [tags, setTags] = useState([])

  const [fieldColors, setFieldColors] = useState({
    operations: 'black',
    typesBiens: 'black',
    nombrePieces: 'black',
    localisations: 'black',
    prix: 'black',
  })

  const operationsOptions = [
    'Achat',
    'Location',
    'Location saisonnière',
    'Programme',
    'Viager',
    'Enchère'
  ]

  const typesBiensOptions = [
    'Appartement',
    'Maison',
    'Chalet',
    'Terrain',
    'Commerce',
    'Garage / Parking',
    'Immeuble',
    'Bureau',
    'Bateau',
    'Locaux / Entrepôts',
    'Cave / Box',
  ]

  const nombrePiecesOptions = [
    '1 pièce',
    '2 pièces',
    '3 pièces',
    '4 pièces',
    '5 pièces',
    '6+ pièces',
  ]

  const localisationsOptions = [
    'Brignais',
    'Bron',
    'Irigny',
    'La Mulatière',
    'Lyon 2ième',
    'Lyon 7ième',
    'Lyon 8ième',
    'Oullin',
    'Saint-Genis-Laval',
    'Vénissieux',
    'Alpes *Nouveau'
  ]

  const prixOptions = [
    '0-500',
    '500-1000',
    '1000-1500',
    '1500-2000',
    '2000-3000',
    '3000-4000',
    '4000-5000',
    '5000+',
  ]

  const handleToggleOperation = (operation) => {
    setOpenWindow('operations')
  
    if (operations.includes(operation)) {
      // Si l'opération est déjà sélectionnée, la désélectionner
      const updatedOperations = []
      setOperations(updatedOperations)
      updateTags('Opérations', updatedOperations)
    } else {
      // Si l'opération n'est pas sélectionnée, la sélectionner
      const updatedOperations = [operation]
      setOperations(updatedOperations)
      updateTags('Opérations', updatedOperations)
    }
  
    setFieldColors((prevColors) => ({
      ...prevColors,
      operations: operations.includes(operation) ? 'black' : 'rgb(206, 39, 73)',
    }))
  }
  
  
  const handleToggleTypeBien = (type) => {
    setOpenWindow('typesBiens')
    let updatedTypesBiens

    if (type === 'Tout sélectionner') {
      setSelectAllTypesBiens(!selectAllTypesBiens)
      updatedTypesBiens = selectAllTypesBiens ? [] : typesBiensOptions
      setTypesBiens(updatedTypesBiens)
      setSelectAllTypesBiens(updatedTypesBiens.length === typesBiensOptions.length)
      updateTags('TypesB', updatedTypesBiens)
    } else {
      updatedTypesBiens = typesBiens.includes(type)
        ? typesBiens.filter((selectedType) => selectedType !== type)
        : [...typesBiens, type]
  
      setTypesBiens(updatedTypesBiens)
      setSelectAllTypesBiens(updatedTypesBiens.length === typesBiensOptions.length)
      updateTags('TypesB', updatedTypesBiens)
    }

    setFieldColors((prevColors) => ({
      ...prevColors,
      typesBiens: updatedTypesBiens.length > 0 ? 'rgb(206, 39, 73)' : 'black',
    }))
  }

  const handleToggleNombrePieces = (nombrePiece) => {
    setOpenWindow('nombrePieces')
    let updatedNombrePieces

    if (nombrePiece === 'Tout sélectionner') {
      setSelectAllNombrePieces(!selectAllNombrePieces)
      updatedNombrePieces = selectAllNombrePieces ? [] : nombrePiecesOptions
      setNombrePieces(updatedNombrePieces)
      setSelectAllNombrePieces(updatedNombrePieces.length === nombrePiecesOptions.length)
      updateTags('NombreP', updatedNombrePieces)
    } else {
      updatedNombrePieces = nombrePieces.includes(nombrePiece)
        ? nombrePieces.filter((selectedNombrePiece) => selectedNombrePiece !== nombrePiece)
        : [...nombrePieces, nombrePiece]
  
      setNombrePieces(updatedNombrePieces)
      setSelectAllNombrePieces(updatedNombrePieces.length === nombrePiecesOptions.length)
      updateTags('NombreP', updatedNombrePieces)
    }

    setFieldColors((prevColors) => ({
      ...prevColors,
      nombrePieces: updatedNombrePieces.length > 0 ? 'rgb(206, 39, 73)' : 'black',
    }))
  }

  const handleToggleLocalisations = (localisation) => {
    setOpenWindow('localisations')
    let updatedLocalisations

    if (localisation === 'Tout sélectionner') {
      setSelectAllLocalisations(!selectAllLocalisations)
      updatedLocalisations = selectAllLocalisations ? [] : localisationsOptions
      setLocalisations(updatedLocalisations)
      setSelectAllLocalisations(updatedLocalisations.length === localisationsOptions.length)
      updateTags('Localisations', updatedLocalisations)
    } else {
      updatedLocalisations = localisations.includes(localisation)
        ? localisations.filter((selectedLocalisation) => selectedLocalisation !== localisation)
        : [...localisations, localisation]
  
      setLocalisations(updatedLocalisations)
      setSelectAllLocalisations(updatedLocalisations.length === localisationsOptions.length)
      updateTags('Localisations', updatedLocalisations)
    }

    setFieldColors((prevColors) => ({
      ...prevColors,
      localisations: updatedLocalisations.length > 0 ? 'rgb(206, 39, 73)' : 'black',
    }))
  }

  const handleTogglePrix = (prixOption) => {
    setOpenWindow('prix')
    let updatedPrix

    if (prixOption === 'Tout sélectionner') {
      setSelectAllPrix(!selectAllPrix)
      updatedPrix = selectAllPrix ? [] : prixOptions
      setPrix(updatedPrix)
      setSelectAllPrix(updatedPrix.length === prixOptions.length)
      updateTags('Fourchette', updatedPrix)
    } else {
      updatedPrix = prix.includes(prixOption)
        ? prix.filter((selectedPrix) => selectedPrix !== prixOption)
        : [...prix, prixOption]
  
      setPrix(updatedPrix)
      setSelectAllPrix(updatedPrix.length === prixOptions.length)
      updateTags('Fourchette', updatedPrix)
    }

    setFieldColors((prevColors) => ({
      ...prevColors,
      prix: updatedPrix.length > 0 ? 'rgb(206, 39, 73)' : 'black',
    }))
  }

  const updateTags = (category, updatedOptions) => {
    setTags((prevTags) => {
      const existingTags = prevTags.filter((tag) => tag.category !== category)
      const newTags = updatedOptions.map((option) => ({ category, value: option }))
      return [...existingTags, ...newTags]
    })
  }

  const handleClearAllFields = () => {
    setFieldColors({
      operations: 'black',
      typesBiens: 'black',
      nombrePieces: 'black',
      localisations: 'black',
      prix: 'black',
    })
  }  

  const handleClearAllTags = () => {
    // Réinitialisation de toutes les sélections
    setOperations([])
    setTypesBiens([])
    setSelectAllTypesBiens(false)
    setNombrePieces([])
    setSelectAllNombrePieces(false)
    setLocalisations([])
    setSelectAllLocalisations(false)
    setPrix([])
    setSelectAllPrix(false)
  
    // Réinitialisation des tags
    setTags([])
  
    // Fermeture de toutes les fenêtres dropdown
    setOpenWindow(null)
  
    // Réinitialisation de la couleur des intitulés des champs
    handleClearAllFields()
  }

  const handleDocumentClick = (event) => {
    // Vérification de si le clic est à l'intérieur du formulaire
    if (formRef.current && !formRef.current.contains(event.target)) {
      // Le Clic en dehors du formulaire ferme toutes les fenêtres d'options
      setOpenWindow(null)
    }
  }

  useEffect(() => {

    // Nettoyage des tableaux dans le localStorage
    localStorage.removeItem('selectedOptionsArray')
    localStorage.removeItem('sortedIDsArray')
  
    // Ajout d'un écouteur d'événements de clic au document entier
    document.addEventListener('click', handleDocumentClick)
  
    // Nettoyage de l'écouteur d'événements lors du démontage du composant
    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])  

  const formRef = useRef(null)
  
  const handleTagClose = (index) => {
    const updatedTags = [...tags]
    const removedTag = updatedTags.splice(index, 1)[0]

    // En fonction de la catégorie du tag, désélection de la checkbox associée
    switch (removedTag.category) {
      case 'Opérations':
        handleToggleOperation(removedTag.value)
        break
      case 'TypesB':
        handleToggleTypeBien(removedTag.value)
        break
      case 'NombreP':
        handleToggleNombrePieces(removedTag.value)
        break
      case 'Localisations':
        handleToggleLocalisations(removedTag.value)
        break
      case 'Fourchette':
        handleTogglePrix(removedTag.value)
        break
      default:
        // Gérer les autres catégories si nécessaire
        break
    }

    setTags(updatedTags)
  }

  const compareByMatchCount = (selectedOptionsArray, selectionArray) => {
    const sortedIDs = selectionArray.map(item => item.Id)
  
    if (selectedOptionsArray) {
      selectedOptionsArray.forEach((selectedOption, index) => {
        const property = Object.keys(selectedOption)[0]
        const selectedValues = selectedOption[property]
  
        if (selectedValues.length > 0) {
          // Filtre des éléments de selectionArray qui ont des valeurs correspondantes
          const filteredArray = selectionArray.filter(item => {
            const itemValue = item[property]
  
            // Comparaison de la valeur de l'élément avec l'une des valeurs sélectionnées
            return selectedValues.includes(itemValue)
          })
  
          // Tri de sortedIDs en fonction du nombre d'éléments correspondants
          sortedIDs.sort((a, b) => {
            const countA = filteredArray.filter(item => item.Id === a).length
            const countB = filteredArray.filter(item => item.Id === b).length
  
            return countB - countA
          })
        }
      })
    }

    return sortedIDs
  }
    
  const handleFilterSubmit = (event) => {
    event.preventDefault()
  
    // Vérification de si au moins une option de type d'opération est sélectionnée
    const isOpertationSelected = operations.length > 0

    if (isOpertationSelected) {
      const selectedOptions = [
        { "Opérations": operations },
        { "TypesB": typesBiens },
        { "NombreP": nombrePieces },
        { "Localisations": localisations },
        { "Fourchette": prix },
      ]
  
      // Sauvegarde du nouveau tableau dans le localStorage, écrasant l'ancien
      localStorage.setItem('selectedOptionsArray', JSON.stringify(selectedOptions))
  
      setOpenWindow(false)
  
      const resetSelection = (state, setFunction, selectAllState, setSelectAllFunction, initialValues) => {
        setFunction(initialValues)
        setSelectAllFunction(false)
      }
  
      // Utilisation de la fonction pour réinitialiser les différentes sélections
      resetSelection(operations, setOperations, selectAllOperations, setSelectAllOperations, [])
      resetSelection(typesBiens, setTypesBiens, selectAllTypesBiens, setSelectAllTypesBiens, [])
      resetSelection(nombrePieces, setNombrePieces, selectAllNombrePieces, setSelectAllNombrePieces, [])
      resetSelection(localisations, setLocalisations, selectAllLocalisations, setSelectAllLocalisations, [])
      resetSelection(prix, setPrix, selectAllPrix, setSelectAllPrix, [])
  
      // Récupération du tableau depuis le localStorage
      const selectionArray = JSON.parse(localStorage.getItem('biensArray'))
      const selectedOptionsArray = JSON.parse(localStorage.getItem('selectedOptionsArray'))
  
      // Filtre des options sélectionnées
      const filteredIDs = selectionArray.filter(item => {
        return selectedOptions.every(option => {
          const [property] = Object.keys(option)
          const selectedValues = option[property]
  
          if (property === "Opérations") {
            return selectedValues.length === 0 || selectedValues.includes(item[property])
          }
          return selectedValues.length === 0 || selectedValues.includes(item[property])
        })
      })
  
      // Récupération des IDs triés en fonction du nombre de correspondances
      const sortedIDs = compareByMatchCount(selectedOptionsArray, filteredIDs)
  
      // Sauvegarde du tableau d'objets dans le localStorage
      localStorage.setItem('sortedIDsArray', JSON.stringify(sortedIDs))
  
      navigate("/biensContainer")
    } else {
      alert("Veuillez sélectionner votre type d'opération")
    }
  }

  return (
    <>
      <div className='container-form-tags'>
        {tags.length === 0 && <p>Vos recherches...</p>}
        {tags.map((tag, index) => (
          <span key={index} className='tag'>
            {tag.value}
            <FontAwesomeIcon
              className='tag-closed'
              icon={faXmark}
              onClick={() => handleTagClose(index)}
            />
          </span>
        ))}
        <FontAwesomeIcon
          className='tag-closed-all'
          icon={faXmark}
          onClick={handleClearAllTags}
        />
      </div>

      <form
        className='formulaire-de-recherche' 
        onSubmit={handleFilterSubmit}
        ref={formRef}
      >
        <button className='button-search'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        
        <div className="dropdown">
          <div
            className="dropdown-header"
            style={{ color: fieldColors.operations }}
            onClick={() => setOpenWindow(openWindow === 'operations' ? null : 'operations')}
          >
            Types d'opération
            <div className="dropdown-chevron">
              { 
                openWindow === 'operations' ?
                  (<FontAwesomeIcon icon={faChevronUp} />) :
                  (<FontAwesomeIcon icon={faChevronDown} />)
              }
            </div>
          </div>
          {openWindow === 'operations' && (
            <div className="dropdown-options">
              {operationsOptions.map((operation) => (
                <label key={operation}>
                  <input
                    type="checkbox"
                    id={operation}
                    value={operation}
                    checked={operations.includes(operation)}
                    onChange={() => handleToggleOperation(operation)}
                  />
                  {operation}
                </label>
              ))}
            </div>
          )}
        </div>
  
        <div className="dropdown">
          <div
            className="dropdown-header"
            style={{ color: fieldColors.typesBiens }}
            onClick={() => setOpenWindow(openWindow === 'typesBiens' ? null : 'typesBiens')}
          >
            Types de bien
            <div className="dropdown-chevron">
              { 
                openWindow === 'typesBiens' ?
                  (<FontAwesomeIcon icon={faChevronUp} />) :
                  (<FontAwesomeIcon icon={faChevronDown} />)
              }
            </div>
          </div>
          {openWindow === 'typesBiens' && (
            <div className="dropdown-options">
              <label>
                <input
                  type="checkbox"
                  id="selectAllTypesBiens"
                  checked={selectAllTypesBiens}
                  onChange={() => handleToggleTypeBien('Tout sélectionner')}
                />
                Tout sélectionner
              </label>
              {typesBiensOptions.map((type) => (
                <label key={type}>
                  <input
                    type="checkbox"
                    id={type}
                    value={type}
                    checked={typesBiens.includes(type)}
                    onChange={() => handleToggleTypeBien(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          )}
        </div>
    
        <div className="dropdown">
          <div
            className="dropdown-header"
            style={{ color: fieldColors.nombrePieces }}
            onClick={() => setOpenWindow(openWindow === 'nombrePieces' ? null : 'nombrePieces')}
          >
            Nombre de pièce
            <div className="dropdown-chevron">
              { 
                openWindow === 'nombrePieces' ?
                  (<FontAwesomeIcon icon={faChevronUp} />) :
                  (<FontAwesomeIcon icon={faChevronDown} />)
              }
            </div>
          </div>
          {openWindow === 'nombrePieces' && (
            <div className="dropdown-options">
              <label>
                <input
                  type="checkbox"
                  id="selectAllNombrePieces"
                  checked={selectAllNombrePieces}
                  onChange={() => handleToggleNombrePieces('Tout sélectionner')}
                />
                Tout sélectionner
              </label>
              {nombrePiecesOptions.map((nombrePiece) => (
                <label key={nombrePiece}>
                  <input
                    type="checkbox"
                    id={nombrePiece}
                    value={nombrePiece}
                    checked={nombrePieces.includes(nombrePiece)}
                    onChange={() => handleToggleNombrePieces(nombrePiece)}
                  />
                  {nombrePiece}
                </label>
              ))}
            </div>
          )}
        </div>
  
        <div className="dropdown">
          <div
            className="dropdown-header"
            style={{ color: fieldColors.localisations }}
            onClick={() => setOpenWindow(openWindow === 'localisations' ? null : 'localisations')}
          >
            Localisation
            <div className="dropdown-chevron">
              { 
                openWindow === 'localisations' ?
                  (<FontAwesomeIcon icon={faChevronUp} />) :
                  (<FontAwesomeIcon icon={faChevronDown} />)
              }
            </div>
          </div>
          {openWindow === 'localisations' && (
            <div className="dropdown-options">
              <label>
                <input
                  type="checkbox"
                  id="selectAllLocalisations"
                  checked={selectAllLocalisations}
                  onChange={() => handleToggleLocalisations('Tout sélectionner')}
                />
                Tout sélectionner
              </label>
              {localisationsOptions.map((localisation) => (
                <label key={localisation}>
                  <input
                    type="checkbox"
                    id={localisation}
                    value={localisation}
                    checked={localisations.includes(localisation)}
                    onChange={() => handleToggleLocalisations(localisation)}
                  />
                  {localisation}
                </label>
              ))}
            </div>
          )}
        </div>
  
        <div className="dropdown">
          <div
            className="dropdown-header"
            style={{ color: fieldColors.prix }}
            onClick={() => setOpenWindow(openWindow === 'prix' ? null : 'prix')}
          >
            Fourchette de prix
            <div className="dropdown-chevron">
              { 
                openWindow === 'prix' ?
                  (<FontAwesomeIcon icon={faChevronUp} />) :
                  (<FontAwesomeIcon icon={faChevronDown} />)
              }
            </div>
          </div>
          {openWindow === 'prix' && (
            <div className="dropdown-options">
              <label>
                <input
                  type="checkbox"
                  id="selectAllPrix"
                  checked={selectAllPrix}
                  onChange={() => handleTogglePrix('Tout sélectionner')}
                />
                Tout sélectionner
              </label>
              {prixOptions.map((prixOption) => (
                <label key={prixOption}>
                  <input
                    type="checkbox"
                    id={prixOption}
                    value={prixOption}
                    checked={prix.includes(prixOption)}
                    onChange={() => handleTogglePrix(prixOption)}
                  />
                  {prixOption}
                </label>
              ))}
            </div>
          )}
        </div>
      </form>
    </>
  )
}

export default FormulaireRecherche