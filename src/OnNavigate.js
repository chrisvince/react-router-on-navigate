import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const displayName = 'OnNavigate'

const Component = props => {
	const {
		onNavigate
	} = props
	const { pathname } = useLocation()

	useEffect(() => {
		onNavigate && onNavigate()
	}, [pathname, onNavigate])

	return null
}

Component.displayName = displayName
export default Component
