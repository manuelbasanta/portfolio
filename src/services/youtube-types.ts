export interface YoutubeServiceData {
  statistics: {
    subscriberCount: string,
    viewCount: string,
    videoCount: string,
  };
  snippet: {
    title: string,
  };
}
