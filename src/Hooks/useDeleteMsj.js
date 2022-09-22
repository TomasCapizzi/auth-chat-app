const useDeleteMsj = ({db}) => {
    const handleDelete = (id) => {
        db.collection('messages').doc(id).delete(); 
    }
  return {
    handleDelete
  }
}

export default useDeleteMsj