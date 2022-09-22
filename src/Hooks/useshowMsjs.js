
const useshowMsjs = ({db, setMessages}) => {

    function showMessages(){
        if(db){
            const msgList = db.collection('messages').orderBy('createdAt').limit(100).onSnapshot(
                querySnapshot => {
                    const data = querySnapshot.docs.map(
                        doc=> ({
                            ...doc.data(),
                            id: doc.id
                        })
                    )
                    setMessages(data)
                }
            )
            return msgList;
        }
    }
  return {
    showMessages,
  }
}

export default useshowMsjs