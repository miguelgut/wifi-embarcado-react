import React from 'react'
import { Button } from 'react-native'

export default props => {
    function executar(){
        console.warn('exec')
    }

    return(
        <Button 
            title="Executar"
            onPress={executar}
        />
    )

}