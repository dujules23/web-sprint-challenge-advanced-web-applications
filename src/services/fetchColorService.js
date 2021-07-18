import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = async ()  =>   {

    try {
      const res = await axiosWithAuth().get("/colors")
      console.log(res.data)
      
    }
    catch (err) {
      console.log(err)
    }
};

export default fetchColorService;