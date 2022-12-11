import React from 'react';
import './Defination.css';

export const Defination = ({meanings, word}) => {

    console.log('meaning',meanings)

  return (
    <div className='meaning'>

        {meanings[0] && word && (
           <audio
           style={{backgroundColor:"#fff", borderRadius: 10}}
           src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
           controls>
            Your browser does not support the audio element.
           </audio> 
        )}
        {word === "" ? 
         (
            <span className='subtitle'>Start by typing a word</span>
         ):
         (
            meanings?.map((mean)=>
            mean.meanings?.map((item)=>
                item.definitions
                ?.map((def)=>(
                    <div className='singleMean'>
                        <b>{def.definition}</b>
                        <hr style = {{backgroundColor: "black", width: "100%"}}/>
                        {def.example && 
                        (<span>
                            <b>Example: </b>{def.example}
                        </span>)
                        }

                        {def?.synonyms && 
                        (<span>
                            <b>Synonyms: </b>{def.synonyms.map((s) => `${s},`)}
                        </span>)
                        }
                    </div>
                ))))
         )}
    </div>
  )
}
