export declare type ID = string;
export declare type Instant = Date;
export declare type URL = string;
export declare type LocalDate = Date;
export declare type LocalDateTime = Date;
export declare type Upload = any;
export interface Local {
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    kind: string;
    createdBy?: User;
    updatedBy?: User;
}
export interface ContactElement extends Local {
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    kind: string;
}
export interface Contact extends Local {
    displayName: string;
    position: string;
    comment: string;
    contactId: number;
    organizationName: string;
    firstName: string;
    lastName: string;
    kind: string;
    meta: string;
    code: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    networks: ContactNetwork[];
    addresses: ContactAddress[];
    locations: ContactLocation[];
    anniversaries: ContactAnniversary[];
    customers: Customer[];
    representatives: Representative[];
    receivableDocuments: ReceivableDocument[];
    urls: ContactUrl[];
    tags: Tag[];
    phones: ContactPhone[];
    emails: ContactEmail[];
    notes: Note[];
    tasks: Task[];
}
export interface Task extends Local {
    zone: string;
    backgroundColor: string;
    stateSequence?: number;
    description?: string;
    kind: string;
    color: string;
    meaning?: string;
    due: Date;
    status: string;
    title: string;
    latest: Date;
    finish?: Date;
    start: Date;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    parent?: Task;
    ascendants?: Task[];
    descendants?: Task[];
    responsible?: User;
    reference?: Local;
    children?: Task[];
}
export interface HashtagReference extends Local {
    handle: string;
    referenceId: number;
    hashtagId: number;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PriceList extends Local {
    comment: string;
    name: string;
    kind: string;
    meta: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Box extends Local {
    country: string;
    name: string;
    language: string;
    currency: string;
    configuration: string;
    kind: string;
    token: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    applications?: Application[];
}
export interface PendingReceivablesResultDataGroup {
    count?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
}
export interface ReceivablePending {
    count?: number;
    pending?: number;
    dueDays?: number;
}
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface MemberApplicationPermission extends Local {
    applicationId: number;
    memberId: number;
    configuration: string;
    kind: string;
    meta: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TaskHistory extends Local {
    responsibleId?: number;
    kind: string;
    due: Date;
    status: string;
    flowId?: number;
    stateId?: number;
    finish: Date;
    taskId: number;
    start: Date;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivableReconciliation extends Local {
    comment: string;
    kind: string;
    meta: string;
    issued: Date;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    details?: ReceivableReconciliationDetail[];
}
export interface ContactAnniversary extends ContactElement, Local {
    year?: number;
    month: number;
    kind: string;
    day: number;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Warehouse extends Local {
    comment: string;
    name: string;
    kind: string;
    meta: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivablePaymentHistoryResult {
    issued?: Date;
    total?: number;
}
export interface CreateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface Representative extends Local {
    comment: string;
    name: string;
    contactId: number;
    kind: string;
    meta: string;
    taxId: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface CreateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface SaleDocumentDetail extends Local {
    comment: string;
    entry: string;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    displayLine: number;
    discount: number;
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
    productId: number;
    kind: string;
    meta: string;
    meaning: string;
    total: number;
    unit: string;
    tax: number;
    profit: number;
    item: string;
    price: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Member extends Local {
    kind: string;
    boxId: number;
    userId: number;
    role: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivablePendingByDate {
    total?: ReceivablePendingByEntry;
    date?: Date;
    past?: ReceivablePendingByEntry;
    future?: ReceivablePendingByEntry;
}
export interface ContactAddress extends ContactElement, Local {
    country?: string;
    state?: string;
    reference?: string;
    kind: string;
    street?: string;
    postal?: string;
    city?: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivableResultData {
    contactId?: ID;
    customerId?: ID;
    contactDisplayName?: string;
    customerName?: string;
    dueDaysClass?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    customerRepresentativeId?: ID;
}
export interface PendingReceivableResult {
    data?: PendingReceivableResultData[];
    representatives?: Representative[];
}
export interface PendingReceivablesByDueDaysClassResultData {
    count?: number;
    dueDaysClass?: number;
    debits?: number;
    credits?: number;
}
export interface TaskFlowStructureResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface ContactLocation extends ContactElement, Local {
    latitude: number;
    longitude: number;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesResultData {
    past?: PendingReceivablesResultDataGroup;
    future?: PendingReceivablesResultDataGroup;
    count?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
}
export interface ContactEmail extends ContactElement, Local {
    address: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DefaultTask {
    zone?: string;
    id: ID;
    description: string;
    due?: Date;
}
export interface CreateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface ContactNetwork extends ContactElement, Local {
    provider: string;
    handle: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Tag extends Local {
    backgroundColor: string;
    description: string;
    kind: string;
    color: string;
    meaning: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface Person extends Contact, Local {
    displayName: string;
    position: string;
    comment: string;
    contactId: number;
    organizationName: string;
    firstName: string;
    lastName: string;
    kind: string;
    meta: string;
    code: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Stock extends Local {
    warehouseId: number;
    available: number;
    reserved: number;
    incoming: number;
    productId: number;
    kind: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesHistoryResult {
    data?: ReceivablePendingByDate[];
    now?: Date;
}
export interface MemberApplicationBusinessPermission extends Local {
    applicationId: number;
    businessId: number;
    memberId: number;
    configuration: string;
    kind: string;
    meta: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Zone {
    name: string;
    offset: number;
    description: string;
    code: string;
}
export interface TagDetail extends Local {
    referenceId: number;
    kind: string;
    tagId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivablePendingByEntry {
    debits?: ReceivablePending;
    credits?: ReceivablePending;
}
export interface Customer extends Local {
    comment: string;
    name: string;
    contactId: number;
    representativeId: number;
    creditLimit: number;
    creditDays: number;
    kind: string;
    meta: string;
    taxId: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    invoices?: SaleDocument[];
    receivables?: ReceivableDocument[];
    sales?: SaleDocument[];
}
export interface TaskFlow extends Local {
    backgroundColor: string;
    description?: string;
    kind: string;
    color: string;
    title: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    structure?: ClassifiedTaskFlowStructure;
    states?: TaskState[];
}
export interface UpdateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface PendingReceivablesResult {
    data?: PendingReceivablesResultData;
}
export interface ReceivableReconciliationDetail extends Local {
    comment: string;
    entry: string;
    originalCurrency: string;
    originalRate: number;
    displayLine: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
    kind: string;
    meta: string;
    receivableReconciliationId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    reconciliation?: ReceivableReconciliation;
    receivable?: ReceivableDocument;
}
export interface Business extends Local {
    provider: string;
    country: string;
    name: string;
    language: string;
    currency: string;
    configuration: string;
    description: string;
    kind: string;
    boxId: number;
    taxId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DeleteTaskStateResult {
    id?: ID;
    errors?: UserError[];
}
export interface Organization extends Contact, Local {
    displayName: string;
    position: string;
    comment: string;
    contactId: number;
    organizationName: string;
    firstName: string;
    lastName: string;
    kind: string;
    meta: string;
    code: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PriceListUnitDetail extends Local {
    currency: string;
    productId: number;
    priceListId: number;
    kind: string;
    unit: string;
    price: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface BoxApplicationPermission extends Local {
    applicationId: number;
    configuration: string;
    kind: string;
    meta: string;
    boxId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface User extends Local {
    zone: string;
    handle?: string;
    avatarInitials: string;
    avatarColor: string;
    avatarSize?: number;
    emailAddress: string;
    emailAddressVerified?: Date;
    phoneNumber?: string;
    phoneNumberVerified?: Date;
    firstName: string;
    lastName?: string;
    locale: string;
    kind: string;
    uid?: string;
    blocked?: Date;
    avatarX?: number;
    avatarY?: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    avatarOriginal?: string;
    avatar?: string;
    tasks?: Task[];
}
export interface ClassifiedTaskFlowStructure {
    first?: TaskFlowStructure;
    pendings: TaskFlowStructure[];
    fulfilled?: TaskFlowStructure;
    rejected?: TaskFlowStructure;
}
export interface CreateTaskFlowResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface CreateContactResult {
    contact?: Contact;
    errors?: UserError[];
}
export interface BusinessCurrency extends Local {
    currency: string;
    businessId: number;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivableDocument extends Local {
    comment?: string;
    entry: string;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    displayOn?: Date;
    kind: string;
    meta?: string;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    taxId?: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    customer?: Customer;
    reconciliationDetails?: ReceivableReconciliationDetail[];
    paid?: Date;
}
export interface PendingReceivablesByDueDaysClassResult {
    data?: PendingReceivablesByDueDaysClassResultData[];
    pastDueDays?: number[];
    futureDueDays?: number[];
}
export interface SaleDocument extends Local {
    comment?: string;
    entry: string;
    representativeId: number;
    customerId: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    required?: Date;
    delivered?: Date;
    subtotal: number;
    discount: number;
    saleTotal: number;
    originalSubtotal: number;
    originalDiscount: number;
    originalExpense: number;
    originalOther: number;
    originalTax: number;
    originalProfit: number;
    originalSaleTotal: number;
    displayOn?: Date;
    shipped?: Date;
    kind: string;
    meta?: string;
    taxId?: string;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    payment: string;
    expense: number;
    other: number;
    tax: number;
    profit: number;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    receivable?: ReceivableDocument;
}
export interface Country extends Local {
    name: string;
    kind: string;
    code: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface ContactUrl extends ContactElement, Local {
    specification: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateAddTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface Product extends Local {
    comment: string;
    name: string;
    currency: string;
    unitListId: number;
    purchaseUnit: string;
    purchaseFactor: number;
    saleFactor: number;
    saleUnit: string;
    available: number;
    reserved: number;
    incoming: number;
    kind: string;
    meta: string;
    unit: string;
    price: number;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Unit extends Local {
    name: string;
    kind: string;
    code: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Hashtag extends Local {
    handle: string;
    backgroundColor: string;
    description: string;
    kind: string;
    color: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface BoxApplicationBusinessPermission extends Local {
    applicationId: number;
    businessId: number;
    configuration: string;
    kind: string;
    meta: string;
    boxId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateUpdateUserResult {
    errors?: UserError[];
    user?: User;
}
export interface Currency extends Local {
    name: string;
    kind: string;
    code: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface UserError {
    name: string;
    value: string;
    code?: string;
}
export interface TaskFlowStructure extends Local {
    first: Boolean;
    stateSequence: number;
    kind: string;
    status: string;
    flowId: number;
    stateId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    state: TaskState;
}
export interface UnitListDetail extends Local {
    alternativeUnit: string;
    alternativeFactor: number;
    unitListId: number;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UnitList extends Local {
    name: string;
    baseUnit: string;
    kind: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PriceListDetail extends Local {
    currency: string;
    productId: number;
    priceListId: number;
    kind: string;
    price: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Application extends Local {
    name: string;
    configuration: string;
    kind: string;
    meta: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UserReference extends Local {
    handle: string;
    referenceId: number;
    kind: string;
    userId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ContactPhone extends ContactElement, Local {
    number: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Note extends Local {
    zone: string;
    latitude?: number;
    longitude?: number;
    referenceId: number;
    displayOn?: Date;
    description: string;
    kind: string;
    start: Date;
    locked: Boolean;
    pinned: Boolean;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    hashtags?: Hashtag[];
}
export interface TaskState extends Local {
    backgroundColor: string;
    parentId?: ID;
    parentSequence: number;
    description?: string;
    kind: string;
    color: string;
    flowId: ID;
    title: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
    delete: ID[];
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
}
export interface UpdateNoteInput {
    zone?: string;
    latitude?: number;
    longitude?: number;
    description?: string;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
}
export interface UpdateTaskStateInput {
    backgroundColor?: string;
    parentId?: ID;
    parentSequence?: number;
    description?: string;
    color?: string;
    title?: string;
}
export interface TaskFlowStructureInput {
    first?: Boolean;
    stateSequence?: number;
    status?: string;
}
export interface ReceivableDocumentFilterInput {
    entry?: string;
    remoteSource?: string;
    pending?: Boolean;
}
export interface ContactNetworkInput {
    provider?: string;
    handle?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface CreateTaskFlowInput {
    backgroundColor?: string;
    description?: string;
    color?: string;
    title?: string;
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface UserFilterInput {
    q?: string;
}
export interface ContactEventFilterInput {
    days?: number;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
    delete: ID[];
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
}
export interface TagInput {
    description?: string;
    type?: string;
    backgroundColor?: string;
    parentId?: ID;
    color?: string;
}
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: ID;
}
export interface ContactPhoneInput {
    number?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactEmailInput {
    address?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
export interface UpdateTaskInput {
    zone?: string;
    backgroundColor?: string;
    responsibleId?: ID;
    description?: string;
    color?: string;
    due?: Date;
    title?: string;
}
export interface ContactFilterInput {
    q?: string;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
}
export interface UpdateTaskFlowInput {
    backgroundColor?: string;
    description?: string;
    color?: string;
    title?: string;
}
export interface ContactAnniversaryInput {
    year?: number;
    month?: number;
    day?: number;
    sequence?: number;
    locus?: string;
}
export interface UpdateSelfInput {
    zone?: string;
    handle?: string;
    password?: string;
    avatarInitials?: string;
    avatarColor?: string;
    avatarSize?: number;
    emailAddress?: string;
    phoneNumber?: string;
    avatarOriginal?: Upload;
    firstName?: string;
    lastName?: string;
    locale?: string;
    uid?: string;
    avatarX?: number;
    avatarY?: number;
}
export interface ReceivablePaymentHistoryInputFilter {
    businessId?: ID[];
    customerContactId?: ID;
    representativeContactId?: ID;
    months?: number;
}
export interface CreateBusinessInput {
    provider?: string;
    country?: string;
    name?: string;
    language?: string;
    currency?: string;
    description?: string;
    taxId?: string;
}
export interface ContactLocationInput {
    latitude?: number;
    longitude?: number;
    sequence?: number;
    locus?: string;
}
export interface CreateTaskInput {
    referenceId?: ID;
    parentId?: ID;
    supervise?: Boolean;
    zone?: string;
    backgroundColor?: string;
    responsibleId?: ID;
    description?: string;
    color?: string;
    due?: Date;
    title?: string;
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
}
export interface ContactAddressInput {
    country?: string;
    state?: string;
    reference?: string;
    street?: string;
    postal?: string;
    city?: string;
    sequence?: number;
    locus?: string;
}
export interface TagFilterInput {
    q?: string;
    limit?: number;
}
export interface ContactInput {
    comment?: string;
    organizationName?: string;
}
export interface CreateNoteInput {
    referenceId?: ID;
    zone?: string;
    latitude?: number;
    longitude?: number;
    description?: string;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
}
export interface CreateTaskStateInput {
    flowId?: ID;
    backgroundColor?: string;
    parentId?: ID;
    parentSequence?: number;
    description?: string;
    color?: string;
    title?: string;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
export interface ContactUrlActionsInput {
    create: ContactUrlIdInput[];
    update: ContactUrlIdInput[];
    delete: ID[];
}
export interface UpdateBusinessInput {
    provider?: string;
    country?: string;
    name?: string;
    language?: string;
    currency?: string;
    description?: string;
    taxId?: string;
}
export interface ContactUrlInput {
    specification?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactEventsFilterInput {
    days?: number;
}
