import React from "react";
import { db } from '../firebase/config';
import {collection,onSnapshot} from "firebase/firestore";
import { useState, useEffect } from "react";

function TopRest() {
const [Datas, setDatas] = useState([])

const DatasCollectionRef = collection(db, "Datas")
  useEffect(() => {
    onSnapshot(DatasCollectionRef, snapshot => {
      setDatas(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }))
    }) 
  },)    
    return (
        <><h1>Top Restaurant</h1><div class="card-sec">
            {Datas.map((Datas) => (
                <div class='card'>
                    <div key={Datas.id}>
                        <img src={Datas.downloadURL} alt="" class="card-img-top" />
                        <div class="card-body">
                            <li>{Datas.Name}</li>
                            <li>{Datas.address}</li>
                            <li>{Datas.latitude}</li>
                            <li>{Datas.longitude}</li>
                            <li>{Datas.services}</li>
                            <li><span class="fa fa-star checked">{Datas.rating}</span></li>
                        </div>
                    </div>
                </div>
            ))}
        </div></>
    );
}

export default TopRest;