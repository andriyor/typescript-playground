interface GetSkusResponse {
    requestId: string;
    response: {
        data: {
            skus: {
                edges: Array<{
                    cursor: string;
                }>;
                pageInfo: {
                    endCursor: string;
                    hasNextPage: boolean;
                    hasPreviousPage: boolean;
                    startCursor: string;
                };
            };
        };
    };
}

async function getRequest() {
    console.log(
        `from service`,
        {
            hasNextPage: response?.response?.data?.skus?.pageInfo?.hasNextPage,
            endCursor: response?.response?.data?.skus?.pageInfo?.endCursor,
            numSkus: response?.response?.data?.skus?.edges?.length,
        }
    );
    return true;
}
