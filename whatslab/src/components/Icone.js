import React from 'react'

export function Icone(props) {
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone}/>
	</div>
}

export default Icone;