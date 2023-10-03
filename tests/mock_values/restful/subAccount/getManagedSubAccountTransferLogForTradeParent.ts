import { FromAccountType, RestSubAccountTypes, SubAccountStatus, ToAccountType } from '../../../../src/types';

export const mockResponse: RestSubAccountTypes.getManagedSubAccountTransferLogResponse = {
    managerSubTransferHistoryVos: [
        {
            fromEmail: 'test_0_virtual@kq3kno9imanagedsub.com',
            fromAccountType: FromAccountType.SPOT,
            toEmail: 'wdywl0lddakh@test.com',
            toAccountType: ToAccountType.SPOT,
            asset: 'BNB',
            amount: '0.01',
            scheduledData: 1679416673000,
            createTime: 1679416673000,
            status: SubAccountStatus.SUCCESS,
            tranId: 91077779
        },
        {
            fromEmail: 'wdywl0lddakh@test.com',
            fromAccountType: FromAccountType.SPOT,
            toEmail: 'test_0_virtual@kq3kno9imanagedsub.com',
            toAccountType: ToAccountType.SPOT,
            asset: 'BNB',
            amount: '1',
            scheduledData: 1679416616000,
            createTime: 1679416616000,
            status: SubAccountStatus.SUCCESS,
            tranId: 91077676
        }
    ],
    count: 2
};
