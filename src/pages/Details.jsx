import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import axios from 'axios'
import { searchByCountry } from '../config'
import { Button } from '../components/Button'
import { Info } from '../components/Info'


export const Details = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const coBack = () => navigate(-1)
  const push = (name) => navigate(`/country/${name}`)

  const [country, setCountry] = useState(null)

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]))
  }, [name])

  return (
    <div>
      <Button onClick={coBack}>
        <IoArrowBack /> Back
      </Button>
      {country &&
        <Info {...country} push={push} />
      }
    </div>
  )
}
