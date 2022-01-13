export type ID = string;
export type Instant = Date;
export type LocalDate = Date;
export type URL = string;
export type JSON = any;
export type Upload = any;
export type LocalDateTime = Date;
export interface ContactElement extends Local {
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
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
    lastName: string;
    organizationName: string;
    firstName: string;
    code: string;
    kind: string;
    meta: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
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
    tags: Tag[];
    phones: ContactPhone[];
    emails: ContactEmail[];
    notes: Note[];
    tasks: Task[];
    urls: ContactUrl[];
}
export interface Local {
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    kind: string;
    createdBy?: User;
    updatedBy?: User;
}
export interface TagDetail extends Local {
    referenceId: number;
    tagId: number;
    kind: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TaskState extends Local {
    parentId?: ID;
    parentSequence: number;
    backgroundColor: string;
    description?: string;
    color: string;
    flowId: ID;
    title: string;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface SaleDocumentDetail extends Local {
    entry: string;
    comment: string;
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
    originalTotal: number;
    originalCurrency: string;
    originalRate: number;
    displayLine: number;
    price: number;
    unit: string;
    meaning: string;
    total: number;
    tax: number;
    profit: number;
    item: string;
    kind: string;
    meta: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
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
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ClassifiedTaskFlowStructure {
    first?: TaskFlowStructure;
    pendings: TaskFlowStructure[];
    fulfilled?: TaskFlowStructure;
    rejected?: TaskFlowStructure;
}
export interface SaleDocument extends Local {
    entry: string;
    comment?: string;
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
    representativeId: number;
    originalPending: number;
    originalTotal: number;
    originalCurrency: string;
    customerId: number;
    originalRate: number;
    displayOn?: Date;
    required?: Date;
    delivered?: Date;
    taxId?: string;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    payment: string;
    shipped?: Date;
    expense: number;
    other: number;
    tax: number;
    profit: number;
    kind: string;
    meta?: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    receivable?: ReceivableDocument;
}
export interface Person extends Contact, Local {
    displayName: string;
    position: string;
    comment: string;
    contactId: number;
    lastName: string;
    organizationName: string;
    firstName: string;
    code: string;
    kind: string;
    meta: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ContactAddress extends ContactElement, Local {
    state?: string;
    country?: string;
    reference?: string;
    street?: string;
    postal?: string;
    city?: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivablePendingByDate {
    total?: ReceivablePendingByEntry;
    past?: ReceivablePendingByEntry;
    future?: ReceivablePendingByEntry;
    date?: Date;
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
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
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
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface MemberApplicationPermission extends Local {
    applicationId: number;
    memberId: number;
    configuration: string;
    kind: string;
    meta: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PriceList extends Local {
    name: string;
    comment: string;
    kind: string;
    meta: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ContactUrl extends ContactElement, Local {
    specification: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface ContactAnniversary extends ContactElement, Local {
    month: number;
    year?: number;
    day: number;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DownloadApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
}
export interface PriceListDetail extends Local {
    currency: string;
    priceListId: number;
    productId: number;
    price: number;
    kind: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface Unit extends Local {
    name: string;
    code: string;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
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
export interface DeleteTaskStateResult {
    id?: ID;
    errors?: UserError[];
}
export interface Box extends Local {
    zone: string;
    name: string;
    country: string;
    currency: string;
    configuration: string;
    token: string;
    locale: string;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    applications: Application[];
    businesses: Business[];
}
export interface Zone {
    name: string;
    offset: number;
    description: string;
    code: string;
}
export interface CreateAddTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface UpdateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface ReceivableReconciliation extends Local {
    comment: string;
    issued: Date;
    kind: string;
    meta: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    details?: ReceivableReconciliationDetail[];
}
export interface User extends Local {
    zone: string;
    handle?: string;
    avatarInitials: string;
    avatarColor: string;
    avatarBackgroundColor: string;
    avatarSize?: number;
    emailAddress?: string;
    emailAddressVerified?: Date;
    phoneNumber?: string;
    phoneNumberVerified?: Date;
    lastName?: string;
    firstName: string;
    uid?: string;
    blocked?: Date;
    avatarX?: number;
    avatarY?: number;
    locale: string;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    avatarOriginal?: string;
    avatar?: string;
    tasks?: Task[];
}
export interface PendingReceivableResultData {
    customerRepresentativeId?: ID;
    contactDisplayName?: string;
    customerName?: string;
    dueDaysClass?: number;
    contactId?: ID;
    customerId?: ID;
    dueDays?: number;
    debits?: number;
    credits?: number;
}
export interface Currency extends Local {
    name: string;
    code: string;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateUpdateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface ReceivablePending {
    count?: number;
    pending?: number;
    dueDays?: number;
}
export interface UserError {
    name: string;
    value: string;
    code?: string;
}
export interface Application extends Local {
    name: string;
    configuration: string;
    kind: string;
    meta: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Product extends Local {
    name: string;
    comment: string;
    currency: string;
    unitListId: number;
    available: number;
    purchaseFactor: number;
    saleUnit: string;
    reserved: number;
    saleFactor: number;
    incoming: number;
    purchaseUnit: string;
    price: number;
    unit: string;
    kind: string;
    meta: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TaskFlowStructureResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface Task extends Local {
    zone: string;
    stateSequence?: number;
    backgroundColor: string;
    description?: string;
    color: string;
    start: Date;
    meaning?: string;
    due: Date;
    status: string;
    title: string;
    latest: Date;
    finish?: Date;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    parent?: Task;
    ascendants?: Task[];
    descendants?: Task[];
    responsible?: User;
    children?: Task[];
    reference?: Local;
}
export interface SynchronizationStatus {
    nextStart?: Date;
    start?: Date;
    running?: Boolean;
}
export interface BoxApplicationPermission extends Local {
    applicationId: number;
    configuration: string;
    boxId: number;
    kind: string;
    meta: string;
    id: ID;
    version: number;
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
export interface Tag extends Local {
    backgroundColor: string;
    description: string;
    color: string;
    meaning: string;
    kind: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PriceListUnitDetail extends Local {
    currency: string;
    priceListId: number;
    productId: number;
    price: number;
    unit: string;
    kind: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivableDocument extends Local {
    entry: string;
    comment?: string;
    originalPending: number;
    originalTotal: number;
    originalCurrency: string;
    originalRate: number;
    displayOn?: Date;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    kind: string;
    meta?: string;
    taxId?: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    customer?: Customer;
    reconciliationDetails?: ReceivableReconciliationDetail[];
    paid?: Date;
}
export interface PendingReceivablesByDueDaysClassResultData {
    count?: number;
    dueDaysClass?: number;
    debits?: number;
    credits?: number;
}
export interface PackageBundle {
    name?: string;
    file?: string;
    version?: string;
    provides?: string;
    installed?: Date;
    vendor?: string;
    built?: Date;
}
export interface ContactPhone extends ContactElement, Local {
    number: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Representative extends Local {
    name: string;
    comment: string;
    contactId: number;
    taxId: string;
    kind: string;
    meta: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Stock extends Local {
    warehouseId: number;
    productId: number;
    available: number;
    reserved: number;
    incoming: number;
    kind: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Customer extends Local {
    name: string;
    comment: string;
    contactId: number;
    representativeId: number;
    creditLimit: number;
    creditDays: number;
    taxId: string;
    kind: string;
    meta: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    invoices?: SaleDocument[];
    receivables?: ReceivableDocument[];
    sales?: SaleDocument[];
}
export interface ReceivableReconciliationDetail extends Local {
    entry: string;
    comment: string;
    receivableReconciliationId: number;
    originalCurrency: string;
    originalRate: number;
    originalReconciled: number;
    reconciled: number;
    receivableDocumentId: number;
    displayLine: number;
    kind: string;
    meta: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    reconciliation?: ReceivableReconciliation;
    receivable?: ReceivableDocument;
}
export interface ReceivablePendingByEntry {
    debits?: ReceivablePending;
    credits?: ReceivablePending;
}
export interface BoxApplicationBusinessPermission extends Local {
    applicationId: number;
    businessId: number;
    configuration: string;
    boxId: number;
    kind: string;
    meta: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivablePaymentHistoryResult {
    issued?: Date;
    total?: number;
}
export interface CreateTaskFlowResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface Country extends Local {
    name: string;
    code: string;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesHistoryResult {
    data?: ReceivablePendingByDate[];
    now?: Date;
}
export interface DeleteApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
}
export interface BusinessCurrency extends Local {
    currency: string;
    businessId: number;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Member extends Local {
    boxId: number;
    userId: number;
    role: string;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UserReference extends Local {
    handle: string;
    referenceId: number;
    userId: number;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface ContactEmail extends ContactElement, Local {
    address: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivableResult {
    data?: PendingReceivableResultData[];
    representatives?: Representative[];
}
export interface CreateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface Business extends Local {
    provider: string;
    zone: string;
    name: string;
    country: string;
    currency: string;
    scheduled: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    description: string;
    configuration?: string;
    boxId: number;
    taxId?: string;
    enabled: Boolean;
    locale: string;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    synchronization?: SynchronizationStatus;
}
export interface MemberApplicationBusinessPermission extends Local {
    applicationId: number;
    businessId: number;
    memberId: number;
    configuration: string;
    kind: string;
    meta: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateContactResult {
    errors?: UserError[];
    contact?: Contact;
}
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface Organization extends Contact, Local {
    displayName: string;
    position: string;
    comment: string;
    contactId: number;
    lastName: string;
    organizationName: string;
    firstName: string;
    code: string;
    kind: string;
    meta: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface PendingReceivablesByDueDaysClassResult {
    data?: PendingReceivablesByDueDaysClassResultData[];
    pastDueDays?: number[];
    futureDueDays?: number[];
}
export interface UpdateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface TaskFlowStructure extends Local {
    first: Boolean;
    stateSequence: number;
    status: string;
    flowId: number;
    stateId: number;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    state: TaskState;
}
export interface UpdateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface Hashtag extends Local {
    handle: string;
    backgroundColor: string;
    description: string;
    color: string;
    kind: string;
    id: ID;
    version: number;
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
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface SynchronizeBusinessResult {
    synchronize?: SynchronizationStatus;
    errors?: UserError[];
}
export interface CreateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface HashtagReference extends Local {
    handle: string;
    referenceId: number;
    hashtagId: number;
    kind: string;
    id: ID;
    version: number;
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
    description: string;
    displayOn?: Date;
    start: Date;
    locked: Boolean;
    pinned: Boolean;
    kind: string;
    id: ID;
    version: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    hashtags?: Hashtag[];
}
export interface Warehouse extends Local {
    name: string;
    comment: string;
    kind: string;
    meta: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesResultDataGroup {
    count?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
}
export interface CurrentBox {
    availableApplications?: Application[];
}
export interface TaskHistory extends Local {
    responsibleId?: number;
    start: Date;
    due: Date;
    status: string;
    flowId?: number;
    stateId?: number;
    finish: Date;
    taskId: number;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesResult {
    data?: PendingReceivablesResultData;
}
export interface DeleteConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface TaskFlow extends Local {
    backgroundColor: string;
    description?: string;
    color: string;
    title: string;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    structure?: ClassifiedTaskFlowStructure;
    states?: TaskState[];
}
export interface DownloadablePackage {
    name?: string;
    id?: string;
    latestVersion?: DownloadablePackageVersion;
    versions?: DownloadablePackageVersion[];
}
export interface DownloadConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface CreateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface DownloadablePackageVersion {
    version?: string;
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
}
export interface ContactPhoneInput {
    number?: string;
    sequence?: number;
    locus?: string;
}
export interface TaskFlowStructureInput {
    first?: Boolean;
    stateSequence?: number;
    status?: string;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface ContactEventFilterInput {
    days?: number;
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: ID;
}
export interface UpdateTaskStateInput {
    parentId?: ID;
    parentSequence?: number;
    backgroundColor?: string;
    description?: string;
    color?: string;
    title?: string;
}
export interface ContactUrlInput {
    specification?: string;
    sequence?: number;
    locus?: string;
}
export interface ReceivablePaymentHistoryInputFilter {
    customerContactId?: ID;
    representativeContactId?: ID;
    businessId?: ID[];
    months?: number;
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
export interface ContactLocationInput {
    latitude?: number;
    longitude?: number;
    sequence?: number;
    locus?: string;
}
export interface CreateTaskInput {
    parentId?: ID;
    supervise?: Boolean;
    referenceId?: ID;
    zone?: string;
    responsibleId?: ID;
    backgroundColor?: string;
    description?: string;
    color?: string;
    due?: Date;
    title?: string;
}
export interface UpdateTaskInput {
    zone?: string;
    responsibleId?: ID;
    backgroundColor?: string;
    description?: string;
    color?: string;
    due?: Date;
    title?: string;
}
export interface ContactEmailInput {
    address?: string;
    sequence?: number;
    locus?: string;
}
export interface UpdateSelfInput {
    zone?: string;
    handle?: string;
    password?: string;
    avatarInitials?: string;
    avatarColor?: string;
    avatarBackgroundColor?: string;
    avatarSize?: number;
    emailAddress?: string;
    phoneNumber?: string;
    avatarOriginal?: Upload;
    lastName?: string;
    firstName?: string;
    uid?: string;
    avatarX?: number;
    avatarY?: number;
    locale?: string;
}
export interface UpdateBusinessInput {
    provider?: string;
    zone?: string;
    name?: string;
    country?: string;
    currency?: string;
    scheduled?: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    description?: string;
    configuration?: string;
    taxId?: string;
    enabled?: Boolean;
    locale?: string;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
export interface ContactAnniversaryInput {
    month?: number;
    year?: number;
    day?: number;
    sequence?: number;
    locus?: string;
}
export interface UserFilterInput {
    q?: string;
}
export interface CreateBusinessInput {
    provider?: string;
    zone?: string;
    name?: string;
    country?: string;
    currency?: string;
    scheduled?: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    description?: string;
    configuration?: string;
    taxId?: string;
    enabled?: Boolean;
    locale?: string;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
}
export interface TagInput {
    description?: string;
    type?: string;
    parentId?: ID;
    backgroundColor?: string;
    color?: string;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
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
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface CreateTaskStateInput {
    flowId?: ID;
    parentId?: ID;
    parentSequence?: number;
    backgroundColor?: string;
    description?: string;
    color?: string;
    title?: string;
}
export interface ContactFilterInput {
    q?: string;
}
export interface ContactEventsFilterInput {
    days?: number;
}
export interface ContactNetworkInput {
    provider?: string;
    handle?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
    delete: ID[];
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface CreateTaskFlowInput {
    backgroundColor?: string;
    description?: string;
    color?: string;
    title?: string;
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
}
export interface ContactInput {
    comment?: string;
    organizationName?: string;
}
export interface UpdateTaskFlowInput {
    backgroundColor?: string;
    description?: string;
    color?: string;
    title?: string;
}
export interface ContactAddressInput {
    state?: string;
    country?: string;
    reference?: string;
    street?: string;
    postal?: string;
    city?: string;
    sequence?: number;
    locus?: string;
}
export interface ReceivableDocumentFilterInput {
    entry?: string;
    remoteSource?: string;
    pending?: Boolean;
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

