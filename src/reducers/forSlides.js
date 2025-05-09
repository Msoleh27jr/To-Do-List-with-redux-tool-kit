import { createSlice } from "@reduxjs/toolkit";

export const forData = createSlice({
    name : "counter" ,
    initialState : {
        data : [
            {
                id : 1 ,
                name : "Ali" ,
                age : 34 ,
                status : true 
            },
            {
                id : 2 ,
                name : "Vali" ,
                age : 11 ,
                status : false 
            },
            {
                id : 3 ,
                name : "Alijon" ,
                age : 21 ,
                status : true 
            }
        ]
    },
    reducers : {
        deleteFun : (state , id)=> {
            state.data = state.data.filter((e)=> e.id != id.payload)
        },
        funAdd : (state , elem)=> {
            state.data = [...state.data , elem.payload]
        },
        funCheck : (state , id ) => {
            state.data = state.data.map((e)=> {
                if(e.id == id.payload){
                    e.status = !e.status
                }
                return e
            })
        } ,
        funEdit : (state , elem ) => {
            state.data = state.data.map((e)=> {
                if(e.id == elem.payload.id){
                    e.name = elem.payload.name
                    e.age = elem.payload.age
                    e.status = elem.payload.status
                }
                return e
            })
        }
    }
})
export const {deleteFun , funAdd , funCheck , funEdit} = forData.actions
export default forData.reducer