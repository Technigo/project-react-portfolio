import React from 'react'
import { Reset } from 'styled-reset'
import { GlobalStyle } from './Global'
import { Main } from './components/Main'

export const App = () => {
	return (
		<>
			<Reset />
			<GlobalStyle />
			<Main />
		</>
	)
}

