interface ContentBody {
  id?: number;
  title: string;
  body: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ContentQueryParams {
  orderBy?: string;
  limit?: number;
  offset?: number;
  orderType?: string;
}

export { ContentQueryParams, ContentBody };
