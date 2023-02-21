export const stories = [
    {
      src: require("assets/img/bg/b1.jpg").default,
      altText: "NCKU",
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
      caption: "My startup partners and I created an MVP product of CMS using cost-efficient serverless technology to minimize expenses. We used Go with DDD design pattern and deployed React on a cloud bucket. GCP Cloud run was also utilized. Overall, we leveraged popular technologies to develop an MVP product.",
    },
    {
      src: require("assets/img/demo/rec_cli.gif").default,
      altText: "rec_cli",
      caption: "The user-friendly recommendation system tool being developed allows users to select advanced deep learning algorithms using the CLI to specify datasets and parameters for training and prediction. Ray is used as an AutoML hyperparameter tuning tool, simplifying the use of different datasets for users.",
    },
    {
      src: require("assets/img/demo/finlab_0.png").default,
      altText:"finlab showcase 0",
      caption:"Finlab (1). this picture shows the use of NLP to summarize news articles and present them on the front-end page. Using go-lang colly for stable online web-cralwer, and BERT + KNN for sentence sumarrization",
    },
    {
      src: require("assets/img/demo/finlab_1.png").default,
      altText:"finlab showcase 1",
      caption:"Finlab (2). To optimize the user's understanding of the daily rapid changes in the financial information, I use the NLP model to calculate the Topic, and by calculating the date changes, we can extract the time series trend of each topic change, so as to further apply.",
    },
    {
      src: require("assets/img/demo/finlab_2.png").default,
      altText:"finlab showcase 2",
      caption:"Finlab (3). I use the Deep Learning Model to predict the future trend of the stock price. In this case, we only use the LSTM and GRU for a demo. And using Ray: the AutoML tool for tuning the hyperparameters for the model, the user won't need to wonder what parameters have the best performance; the algorithm can find that.",
    },
    {
      src: require("assets/img/demo/iceberg.png").default,
      altText: "iceberg",
      caption: "There are still many projects and products in my portofolio, and I look forward to the opportunity to share them with you.",
    }
    
];

export default stories;