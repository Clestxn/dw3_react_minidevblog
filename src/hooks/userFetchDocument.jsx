import { useState, useEffect } from "react";
import { db } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore"

export const userFetchDocument = (documentCollection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        const loadDocument = async () => {
            setLoading(true)
            try {
                const docRef = await doc(db, documentCollection, id)
                const docSnap = await getDoc(docRef)

                setDocument(docSnap.data())
            } catch (error) {
                console.log(error)
                setError(error.message)

            }
            setLoading(false)

        }
        loadDocument()
    }, [docCollection, id])

    console.log(document)

    return {
        document,
        loading,
        error
    }
}