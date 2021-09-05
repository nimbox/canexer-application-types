export declare type ID = string;
export declare type LocalDateTime = Date;
export declare type URL = string;
export declare type Instant = Date;
export declare type LocalDate = Date;
export declare type Upload = any;
export interface ContactElement extends Local {
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    kind: string;
}
export interface Contact extends Local {
    meta: string;
    contactId: number;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    displayName: string;
    comment: string;
    position: string;
    kind: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    urls: ContactUrl[];
    anniversaries: ContactAnniversary[];
    notes: Note[];
    tags: Tag[];
    addresses: ContactAddress[];
    locations: ContactLocation[];
    emails: ContactEmail[];
    networks: ContactNetwork[];
    representatives: Representative[];
    phones: ContactPhone[];
    tasks: Task[];
    customers: Customer[];
}
export interface Local {
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    kind: string;
    createdBy?: User;
    updatedBy?: User;
}
export interface ContactPhone extends ContactElement, Local {
    number: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface Currency extends Local {
    name: string;
    code: string;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface TaskFlow extends Local {
    color: string;
    title: string;
    backgroundColor: string;
    description?: string;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    states?: TaskState[];
    structure?: ClassifiedTaskFlowStructure;
}
export interface PriceList extends Local {
    name: string;
    meta: string;
    comment: string;
    kind: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface Tag extends Local {
    color: string;
    background: string;
    meaning: string;
    description: string;
    kind: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface UpdateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface UnitListDetail extends Local {
    unitListId: number;
    alternativeUnit: string;
    alternativeFactor: number;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface ContactUrl extends ContactElement, Local {
    specification: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface TaskHistory extends Local {
    start: Date;
    due: Date;
    status: string;
    responsibleId?: number;
    flowId?: number;
    stateId?: number;
    finish: Date;
    taskId: number;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface ReceivableReconciliationDetail extends Local {
    meta: string;
    originalCurrency: string;
    originalRate: number;
    displayLine: number;
    receivableReconciliationId: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
    entry: string;
    comment: string;
    kind: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    receivable?: ReceivableDocument;
    reconciliation?: ReceivableReconciliation;
}
export interface HashtagReference extends Local {
    referenceId: number;
    hashtagId: number;
    handle: string;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface ClassifiedTaskFlowStructure {
    pendings: TaskFlowStructure[];
    fulfilled?: TaskFlowStructure;
    rejected?: TaskFlowStructure;
    first?: TaskFlowStructure;
}
export interface CreateTaskFlowResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface ContactEmail extends ContactElement, Local {
    address: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface Customer extends Local {
    name: string;
    meta: string;
    taxId: string;
    contactId: number;
    representativeId: number;
    creditLimit: number;
    creditDays: number;
    comment: string;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    invoices?: SaleDocument[];
    receivables?: ReceivableDocument[];
    sales?: SaleDocument[];
}
export interface BoxApplicationPermission extends Local {
    configuration: string;
    meta: string;
    boxId: number;
    applicationId: number;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface ContactNetwork extends ContactElement, Local {
    handle: string;
    provider: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface PriceListDetail extends Local {
    currency: string;
    priceListId: number;
    productId: number;
    price: number;
    kind: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface Application extends Local {
    name: string;
    configuration: string;
    meta: string;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface Box extends Local {
    name: string;
    language: string;
    configuration: string;
    token: string;
    currency: string;
    country: string;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    applications?: Application[];
}
export interface PriceListUnitDetail extends Local {
    currency: string;
    priceListId: number;
    productId: number;
    price: number;
    unit: string;
    kind: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface User extends Local {
    firstName: string;
    lastName?: string;
    phoneNumber?: string;
    uid?: string;
    blocked?: Date;
    avatarInitials: string;
    avatarColor: string;
    avatarX?: number;
    avatarY?: number;
    avatarSize?: number;
    emailAddress: string;
    emailAddressVerified?: Date;
    phoneNumberVerified?: Date;
    locale: string;
    handle?: string;
    kind: string;
    zone: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    avatar?: string;
    avatarOriginal?: string;
}
export interface UpdateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface CreateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface Zone {
    offset?: number;
    code?: string;
    description?: string;
}
export interface UnitList extends Local {
    name: string;
    baseUnit: string;
    kind: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface ReceivablePending {
    pending?: number;
    dueDays?: number;
    count?: number;
}
export interface ContactAddress extends ContactElement, Local {
    reference?: string;
    state?: string;
    street?: string;
    postal?: string;
    city?: string;
    country?: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface Warehouse extends Local {
    name: string;
    meta: string;
    comment: string;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface Organization extends Contact, Local {
    meta: string;
    contactId: number;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    displayName: string;
    comment: string;
    position: string;
    kind: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface CreateContactResult {
    errors?: UserError[];
    contact?: Contact;
}
export interface PendingReceivablesResult {
    data?: PendingReceivablesResultData;
}
export interface MemberApplicationBusinessPermission extends Local {
    configuration: string;
    meta: string;
    applicationId: number;
    businessId: number;
    memberId: number;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface ReceivablePendingByDate {
    total?: ReceivablePendingByEntry;
    past?: ReceivablePendingByEntry;
    future?: ReceivablePendingByEntry;
    date?: Date;
}
export interface UpdateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface CreateAddTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface DefaultTask {
    id?: string;
    due?: Date;
    description?: string;
    zone?: string;
}
export interface ReceivablePendingByEntry {
    debits?: ReceivablePending;
    credits?: ReceivablePending;
}
export interface ReceivablePaymentHistoryResult {
    issued?: Date;
    total?: number;
}
export interface ContactLocation extends ContactElement, Local {
    latitude: number;
    longitude: number;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface Person extends Contact, Local {
    meta: string;
    contactId: number;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    displayName: string;
    comment: string;
    position: string;
    kind: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface BoxApplicationBusinessPermission extends Local {
    configuration: string;
    meta: string;
    boxId: number;
    applicationId: number;
    businessId: number;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface MemberApplicationPermission extends Local {
    configuration: string;
    meta: string;
    applicationId: number;
    memberId: number;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface CreateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface Hashtag extends Local {
    color: string;
    background: string;
    description: string;
    handle: string;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface Unit extends Local {
    name: string;
    code: string;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface PendingReceivablesHistoryResult {
    data?: ReceivablePendingByDate[];
    now?: Date;
}
export interface Member extends Local {
    boxId: number;
    userId: number;
    role: string;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface PendingReceivablesByDueDaysClassResult {
    data?: PendingReceivablesByDueDaysClassResultData[];
    pastDueDays?: number[];
    futureDueDays?: number[];
}
export interface Stock extends Local {
    productId: number;
    available: number;
    reserved: number;
    incoming: number;
    warehouseId: number;
    kind: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface TaskFlowStructure extends Local {
    status: string;
    flowId: number;
    stateId: number;
    stateSequence: number;
    first: Boolean;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    state: TaskState;
}
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface ReceivableReconciliation extends Local {
    meta: string;
    issued: Date;
    comment: string;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    details?: ReceivableReconciliationDetail[];
}
export interface PendingReceivablesResultData {
    past?: PendingReceivablesResultDataGroup;
    future?: PendingReceivablesResultDataGroup;
    dueDays?: number;
    count?: number;
    debits?: number;
    credits?: number;
    net?: number;
}
export interface SaleDocumentDetail extends Local {
    meta: string;
    productId: number;
    price: number;
    unit: string;
    meaning: string;
    total: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    displayLine: number;
    discount: number;
    tax: number;
    profit: number;
    saleTotal: number;
    originalDiscount: number;
    originalTax: number;
    originalProfit: number;
    originalSaleTotal: number;
    saleDocumentId: number;
    warehouseId: number;
    displayQuantity: number;
    displayUnit: string;
    displayFactor: number;
    displayCurrency: string;
    displayRate: number;
    displayPrice: number;
    quantity: number;
    salePrice: number;
    originalPrice: number;
    originalSalePrice: number;
    entry: string;
    comment: string;
    kind: string;
    item: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface Country extends Local {
    name: string;
    code: string;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface Product extends Local {
    name: string;
    meta: string;
    currency: string;
    price: number;
    unit: string;
    unitListId: number;
    purchaseUnit: string;
    purchaseFactor: number;
    saleFactor: number;
    saleUnit: string;
    available: number;
    reserved: number;
    incoming: number;
    comment: string;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface ReceivableDocument extends Local {
    meta?: string;
    displayOn?: Date;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    entry: string;
    comment?: string;
    kind: string;
    taxId?: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    paid?: Date;
    reconciliationDetails?: ReceivableReconciliationDetail[];
    customer?: Customer;
}
export interface BusinessCurrency extends Local {
    currency: string;
    businessId: number;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface PendingReceivableResult {
    representatives?: Representative[];
    data?: PendingReceivableResultData[];
}
export interface Representative extends Local {
    name: string;
    meta: string;
    taxId: string;
    contactId: number;
    comment: string;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface Business extends Local {
    name: string;
    language: string;
    configuration: string;
    currency: string;
    boxId: number;
    taxId: string;
    description: string;
    provider: string;
    country: string;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface Note extends Local {
    displayOn?: Date;
    latitude?: number;
    longitude?: number;
    referenceId: number;
    start: Date;
    locked: Boolean;
    pinned: Boolean;
    description: string;
    kind: string;
    zone: string;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    hashtags?: Hashtag[];
}
export interface TaskState extends Local {
    color: string;
    parentId?: ID;
    flowId: ID;
    title: string;
    backgroundColor: string;
    parentSequence: number;
    description?: string;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface TaskFlowStructureResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface Task extends Local {
    color: string;
    start: Date;
    meaning?: string;
    due: Date;
    status: string;
    stateSequence?: number;
    title: string;
    backgroundColor: string;
    latest: Date;
    finish?: Date;
    description?: string;
    kind: string;
    zone: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    reference?: Local;
    parent?: Task;
    children?: Task[];
    ascendants?: Task[];
    descendants?: Task[];
    responsible?: User;
}
export interface PendingReceivablesByDueDaysClassResultData {
    dueDaysClass?: number;
    count?: number;
    debits?: number;
    credits?: number;
}
export interface UserError {
    name: string;
    value: string;
    code?: string;
}
export interface CreateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface PendingReceivablesResultDataGroup {
    dueDays?: number;
    count?: number;
    debits?: number;
    credits?: number;
    net?: number;
}
export interface UserReference extends Local {
    referenceId: number;
    userId: number;
    handle: string;
    kind: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface PendingReceivableResultData {
    contactId?: ID;
    customerId?: ID;
    dueDaysClass?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    contactDisplayName?: string;
    customerName?: string;
    customerRepresentativeId?: ID;
}
export interface SaleDocument extends Local {
    meta?: string;
    displayOn?: Date;
    taxId?: string;
    representativeId: number;
    customerId: number;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    payment: string;
    required?: Date;
    shipped?: Date;
    delivered?: Date;
    subtotal: number;
    discount: number;
    expense: number;
    other: number;
    tax: number;
    profit: number;
    saleTotal: number;
    originalSubtotal: number;
    originalDiscount: number;
    originalExpense: number;
    originalOther: number;
    originalTax: number;
    originalProfit: number;
    originalSaleTotal: number;
    entry: string;
    comment?: string;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    receivable?: ReceivableDocument;
}
export interface TagDetail extends Local {
    referenceId: number;
    tagId: number;
    kind: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface CreateUpdateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface ContactAnniversary extends ContactElement, Local {
    day: number;
    year?: number;
    kind: string;
    month: number;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId: string;
    remoteSource: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
}
export interface DeleteTaskStateResult {
    id?: ID;
    errors?: UserError[];
}
export interface ContactUrlInput {
    specification?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
}
export interface UpdateTaskStateInput {
    color?: string;
    parentId?: ID;
    title?: string;
    backgroundColor?: string;
    parentSequence?: number;
    description?: string;
}
export interface ContactEmailInput {
    address?: string;
    sequence?: number;
    locus?: string;
}
export interface UpdateBusinessInput {
    name?: string;
    language?: string;
    currency?: string;
    taxId?: string;
    description?: string;
    provider?: string;
    country?: string;
}
export interface ContactNetworkInput {
    handle?: string;
    provider?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface ReceivableDocumentFilterInput {
    remoteSource?: string;
    pending?: Boolean;
    entry?: string;
}
export interface TagFilterInput {
    q?: string;
    limit?: number;
}
export interface ContactUrlActionsInput {
    create: ContactUrlIdInput[];
    update: ContactUrlIdInput[];
    delete: ID[];
}
export interface ReceivablePaymentHistoryInputFilter {
    businessId?: ID[];
    months?: number;
    representativeContactId?: ID;
    customerContactId?: ID;
}
export interface ContactPhoneInput {
    number?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
}
export interface UpdateTaskInput {
    color?: string;
    due?: Date;
    title?: string;
    backgroundColor?: string;
    description?: string;
    zone?: string;
}
export interface CreateTaskStateInput {
    flowId?: ID;
    color?: string;
    parentId?: ID;
    title?: string;
    backgroundColor?: string;
    parentSequence?: number;
    description?: string;
}
export interface ContactAnniversaryInput {
    day?: number;
    year?: number;
    month?: number;
    sequence?: number;
    locus?: string;
}
export interface CreateNoteInput {
    referenceId?: ID;
    latitude?: number;
    longitude?: number;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
    description?: string;
    zone?: string;
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
}
export interface CreateTaskFlowInput {
    color?: string;
    title?: string;
    backgroundColor?: string;
    description?: string;
}
export interface ContactEventsFilterInput {
    days?: number;
}
export interface ContactLocationInput {
    latitude?: number;
    longitude?: number;
    sequence?: number;
    locus?: string;
}
export interface UserFilterInput {
    q?: string;
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
    delete: ID[];
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
}
export interface TaskResponsibleInput {
    id?: ID;
    detach?: Boolean;
    notify?: Boolean;
}
export interface UpdateNoteInput {
    latitude?: number;
    longitude?: number;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
    description?: string;
    zone?: string;
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: ID;
}
export interface ContactAddressInput {
    reference?: string;
    state?: string;
    street?: string;
    postal?: string;
    city?: string;
    country?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
    delete: ID[];
}
export interface UpdateTaskFlowInput {
    color?: string;
    title?: string;
    backgroundColor?: string;
    description?: string;
}
export interface UpdateSelfInput {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    uid?: string;
    password?: string;
    avatarInitials?: string;
    avatarColor?: string;
    avatarX?: number;
    avatarY?: number;
    avatarSize?: number;
    emailAddress?: string;
    locale?: string;
    avatarOriginal?: Upload;
    handle?: string;
    zone?: string;
}
export interface TagInput {
    description?: string;
    type?: string;
    color?: string;
    parentId?: ID;
    backgroundColor?: string;
}
export interface TaskFlowStructureInput {
    status?: string;
    stateSequence?: number;
    first?: Boolean;
}
export interface CreateTaskInput {
    referenceId?: ID;
    parentId?: ID;
    responsible?: TaskResponsibleInput;
    color?: string;
    due?: Date;
    title?: string;
    backgroundColor?: string;
    description?: string;
    zone?: string;
}
export interface ContactInput {
    organizationName?: string;
    comment?: string;
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface ContactFilterInput {
    q?: string;
}
export interface CreateBusinessInput {
    name?: string;
    language?: string;
    currency?: string;
    taxId?: string;
    description?: string;
    provider?: string;
    country?: string;
}
