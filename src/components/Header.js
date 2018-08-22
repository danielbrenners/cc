import React from 'react'
import styled from 'styled-components'

const Header = props => {
	return (
		<HeaderBackground {...props}>
			<Title>CC</Title>
		</HeaderBackground>
	)
}

const HeaderBackground = styled.div`
	width: ${props => (props.half ? '50%' : '100%')};
	height: ${props => props.height};
	background-color: black;
`

const Title = styled.div`
	color: white;
	text-align: center;
	padding-top: 40px;
	font-size: 36px;
`

export default Header
