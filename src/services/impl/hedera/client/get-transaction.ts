import axios from "axios";

import { useStore } from "../../../../store";
import { CryptoTransfer } from "../../../../domain/CryptoTransfer";
import { getMirrorBase } from "..";

export async function getTransfer(options: { hash: string } ): Promise<CryptoTransfer> {
    const store = useStore();
    const baseUrl = getMirrorBase(store.network);

    const resp = await axios.get(`https://${baseUrl}/api/v1/transactions?hash=${options.hash}`)
        .then(({ data }) => data)
        .catch((error: Error) => {
            throw error;
        });

    return resp.data;
}
