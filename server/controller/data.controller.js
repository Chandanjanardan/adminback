const {DataModel,RagModel} = require ("../models/data.model")


// test controller
const test = async(req,res)=>{
    res.json({msg:"This is test url"})
}


const addChatbot = async (req,res)=>{
    const { chatbotID,chatbotName, knowledgeUrls,description, domain } = req.body;
    
  const combinedData = knowledgeUrls.map((url, index) => {
    return {
      url,
      description: description[index] ? description[index].des : '' // Assuming description is an array of objects
    };
  });
  
  console.log(combinedData);
  // console.log(knowledgeUrls,description)
  try {
    const fineTuneDoc = await DataModel.create({ chatbotID,chatbotName, combinedData, domain });
    res.json({ data: { fineTuneDoc } });
  } catch (error) {
    res.json({ msg: "Error in post kaiwa" });
  }
}

// get request 
const getChatbot = async(req,res)=>{
  const chatbot = await DataModel.find({})
  res.status(200).json({data:chatbot})
}
const addRag = async (req,res)=>{
  const {ragDomain} = req.body
  console.log(ragDomain)
  const ragaData = await RagModel.create({ragDomain})
  res.json({msg:"Rag is inserte",
data:ragaData})
}
const getRag= async (req,res)=>{
  const ragData= await RagModel.find({})
  res.status(200).json({data:ragData})
}

module.exports= {addChatbot,test,getChatbot,addRag,getRag}