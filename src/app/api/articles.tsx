import React, { useState, useEffect } from "react";
import axios from "axios";

export default function articles() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`https://abdul.in.th/ai-news-api/trending?tags=articles`)
      .then((articles) => setArticles(articles.data))
      .catch((err) => console.log(err));
  });
}
