export const stories = [
    {
      src: require("assets/img/b1.jpg").default,
      altText: "Life in NCKU",
      caption: "Life in NCKU",
    },
    {
      src: require("assets/img/demo/pea-sys.gif").default,
      altText: "PEA System",
      caption: "The Project Evolution System project is an analysis tool that we have constructed for government departments in Taiwan. We use advanced NLP techniques to cluster and statistics the plans under the departments, thereby allowing analysts to better understand the changes in the plans.",
    },
    {
      src: require("assets/img/demo/marketing-cms.gif").default,
      altText: "Marketing CMS",
      caption: "This is the MVP product that I made with my startup partners. We adopted the popular serverless technology in recent years, which can minimize the cost of building high-traffic websites to the greatest extent. The technologies used are: Go with DDD design pattern, React deployed on a cloud bucket, and GCP Cloud run (the slower loading is due to the cold-start of serverless).",
    },
    {
      src: require("assets/img/demo/rec_cli.gif").default,
      altText: "A recommendation system tool that I am developing, which allows users to choose advanced deep learning algorithms on their own, simply by using the cli to specify the dataset and parameters, they can carry out training and prediction. In addition, we have introduced Ray as an AutoML hyperparameter tuning tool, thus reducing the hassle of using different datasets for the user.",
      caption: "A recommendation system tool that I am developing, which allows users to choose advanced deep learning algorithms on their own, simply by using the cli to specify the dataset and parameters, they can carry out training and prediction. In addition, we have introduced Ray as an AutoML hyperparameter tuning tool, thus reducing the hassle of using different datasets for the user.",
    },
    {
      src: require("assets/img/demo/finlab_0.png").default,
      altText:"finlab showcase 0",
      caption:"Applying AI to financial information (1). this picture shows the use of NLP to summarize news articles and present them on the front-end page. Using go-lang colly for stable online web-cralwer, and BERT + KNN for sentence sumarrization",
    },
    {
      src: require("assets/img/demo/finlab_1.png").default,
      altText:"finlab showcase 1",
      caption:"Applying AI to financial information (2). To optimize the user's understanding of the daily rapid changes in the financial information, I use the NLP model to calculate the Topic, and by calculating the date changes, we can extract the time series trend of each topic change, so as to further apply.",
    },
    {
      src: require("assets/img/demo/finlab_2.png").default,
      altText:"finlab showcase 2",
      caption:"Applying AI to financial information (3). I use the Deep Learning Model to predict the future trend of the stock price. In this case, we only use the LSTM and GRU for a demo. And using Ray: the AutoML tool for tuning the hyperparameters for the model, the user won't need to wonder what parameters have the best performance; the algorithm can find that.",
    },
    {
      src: require("assets/img/demo/iceberg.png").default,
      altText: "There are still many projects and products in my portofolio, and I look forward to the opportunity to share them with you.",
      caption: "There are still many projects and products in my portofolio, and I look forward to the opportunity to share them with you.",
    }
    
];

export default stories;