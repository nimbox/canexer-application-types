export type ID = string;
export type Instant = Date;
export type LocalDate = Date;
export type LocalDateTime = Date;
export type JSON = any;
export type URL = string;
export type Upload = any;
export interface Local {
    version: number;
    id: ID;
    kind: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    createdBy?: User;
    updatedBy?: User;
}
export interface Contact extends Local {
    comment: string;
    displayName: string;
    position: string;
    code: string;
    meta: string;
    kind: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    contactId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    urls: ContactUrl[];
    tags: Tag[];
    phones: ContactPhone[];
    emails: ContactEmail[];
    notes: Note[];
    tasks: Task[];
    pendingReceivables?: PendingReceivablesByDateResult;
    pendingReceivablesHistory?: PendingReceivablesByDateHistoryResult;
    networks: ContactNetwork[];
    addresses: ContactAddress[];
    locations: ContactLocation[];
    anniversaries: ContactAnniversary[];
    customers: Customer[];
    receivableDocuments: ReceivableDocument[];
    representatives: Representative[];
}
export interface ContactElement extends Local {
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    kind: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface BoxApplicationBusinessPermission extends Local {
    meta: string;
    boxId: number;
    kind: string;
    configuration: string;
    applicationId: number;
    businessId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UserReference extends Local {
    handle: string;
    userId: number;
    kind: string;
    referenceId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Application extends Local {
    name: string;
    enabled: Boolean;
    meta: string;
    kind: string;
    installed: Boolean;
    configuration: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface QuintileValue {
    value: number;
    count: number;
    quintile: number;
}
export interface Zone {
    name: string;
    offset: number;
    code: string;
    description: string;
}
export interface PendingReceivableResult {
    data?: PendingReceivableResultData[];
    representatives?: Representative[];
}
export interface Organization extends Contact, Local {
    comment: string;
    displayName: string;
    position: string;
    code: string;
    meta: string;
    kind: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    contactId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesByDocumentResult {
    context?: PendingReceivablesByDocumentContext;
    datum?: ReceivableDocument[];
    meta?: AnalysisResultMeta;
}
export interface PendingSummaryByCustomer {
    bin?: number;
    customerName?: string;
    customerId?: number;
    balance?: PendingReceivableSummary;
    debits?: PendingReceivableSummary;
    credits?: PendingReceivableSummary;
}
export interface DownloadConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface CreateContactResult {
    errors?: UserError[];
    contact?: Contact;
}
export interface Note extends Local {
    zone: string;
    start: Date;
    locked: Boolean;
    pinned: Boolean;
    kind: string;
    latitude?: number;
    longitude?: number;
    referenceId: number;
    description: string;
    displayOn?: Date;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    hashtags?: Hashtag[];
}
export interface TaskHistory extends Local {
    start: Date;
    due: Date;
    status: string;
    flowId?: number;
    stateId?: number;
    finish: Date;
    taskId: number;
    kind: string;
    responsibleId?: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Currency extends Local {
    name: string;
    code: string;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Member extends Local {
    role: string;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    box: Box;
    user: User;
}
export interface PendingReceivablesByDateContext {
    contact?: Contact;
    pastDays?: number[];
    futureDays?: number[];
    nominal?: Boolean;
    businessIds?: number[];
    currency?: string;
    currencies?: string[];
    zone?: string;
    now?: Date;
}
export interface PendingContactSummaryByDate {
    date?: Date;
    contacts?: PendingSummaryByContact[];
}
export interface CreateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface Hashtag extends Local {
    handle: string;
    color: string;
    kind: string;
    backgroundColor: string;
    description: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesResult1 {
    data?: PendingReceivablesResultData;
}
export interface PendingReceivablesByDueDaysClassResult {
    data?: PendingReceivablesByDueDaysClassResultData[];
    pastDueDays?: number[];
    futureDueDays?: number[];
}
export interface CreateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface TaskState extends Local {
    color: string;
    flowId: ID;
    title: string;
    kind: string;
    backgroundColor: string;
    description?: string;
    parentId?: ID;
    parentSequence: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateMemberApplicationPermissionResult {
    permission?: MemberApplicationPermission;
    errors?: UserError[];
}
export interface PendingReceivablesByDateResult {
    context?: PendingReceivablesByDateContext;
    datum?: PendingReceivablesByDateDatum;
    meta?: AnalysisResultMeta;
}
export interface ContactUrl extends ContactElement, Local {
    kind: string;
    specification: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Task extends Local {
    zone: string;
    color: string;
    start: Date;
    meaning?: string;
    due: Date;
    status: string;
    title: string;
    latest: Date;
    finish?: Date;
    kind: string;
    backgroundColor: string;
    description?: string;
    stateSequence?: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    parent?: Task;
    reference?: Local;
    children?: Task[];
    ascendants?: Task[];
    descendants?: Task[];
    responsible?: User;
}
export interface UpdateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface UpdateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface Person extends Contact, Local {
    comment: string;
    displayName: string;
    position: string;
    code: string;
    meta: string;
    kind: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    contactId: number;
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
export interface BoxApplicationPermission extends Local {
    meta: string;
    boxId: number;
    kind: string;
    configuration: string;
    applicationId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface User extends Local {
    handle?: string;
    zone: string;
    uid?: string;
    avatarX?: number;
    avatarY?: number;
    locale: string;
    enabled?: Boolean;
    kind: string;
    firstName: string;
    lastName?: string;
    avatarInitials: string;
    avatarColor: string;
    avatarBackgroundColor: string;
    avatarSize?: number;
    emailAddress?: string;
    emailAddressVerified?: Date;
    phoneNumber?: string;
    phoneNumberVerified?: Date;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    tasks?: Task[];
    avatar?: string;
    preferences?: JSON;
    avatarOriginal?: string;
    role: string;
    applicationPermissions: MemberApplicationPermission[];
    applicationBusinessPermissions: MemberApplicationBusinessPermission[];
}
export interface PendingReceivablesByContactResult {
    context?: PendingReceivablesByContactContext;
    datum?: PendingReceivablesByContactDatum;
    meta?: AnalysisResultMeta;
}
export interface Business extends Local {
    country: string;
    name: string;
    provider: string;
    zone: string;
    locale: string;
    enabled: Boolean;
    boxId: number;
    taxId?: string;
    kind: string;
    description: string;
    configuration?: string;
    currency: string;
    scheduled: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    currencies?: BusinessCurrency[];
    synchronization?: SynchronizationStatus;
}
export interface PendingReceivablesByContactContext {
    contact?: Contact;
    pastDays?: number[];
    futureDays?: number[];
    nominal?: Boolean;
    businessIds?: number[];
    currency?: string;
    currencies?: string[];
    zone?: string;
    now?: Date;
}
export interface UpdateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface PriceList extends Local {
    name: string;
    comment: string;
    meta: string;
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
export interface MemberApplicationBusinessPermission extends Local {
    meta: string;
    kind: string;
    memberId: number;
    configuration: string;
    applicationId: number;
    businessId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    member: Member;
    business: Business;
    application: Application;
}
export interface DeleteApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
}
export interface PendingContactSummaryDates {
    dates?: PendingContactSummaryByDate;
    currency?: string;
}
export interface TagDetail extends Local {
    tagId: number;
    kind: string;
    referenceId: number;
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
    name: string;
    color: string;
    meaning?: string;
    kind: string;
    backgroundColor: string;
    description?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivableDocument extends Local {
    entry: string;
    comment?: string;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    meta?: string;
    kind: string;
    displayOn?: Date;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
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
    paid?: Date;
    reconciliationDetails?: ReceivableReconciliationDetail[];
}
export interface ReceivableHistorySummaryDatum {
    combined?: ReceivableSummaryByDates;
    separated?: ReceivableSummaryByDates[];
}
export interface Warehouse extends Local {
    name: string;
    comment: string;
    meta: string;
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
export interface UpdateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface PendingReceivablesByDocumentContext {
    nominal?: Boolean;
    businessIds?: number[];
    currency?: string;
    currencies?: string[];
    zone?: string;
    now?: Date;
}
export interface Country extends Local {
    name: string;
    code: string;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PackageBundle {
    version?: string;
    name?: string;
    file?: string;
    vendor?: string;
    built?: Date;
    installed?: Date;
    provides?: string;
}
export interface TaskFlow extends Local {
    color: string;
    title: string;
    kind: string;
    backgroundColor: string;
    description?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    states?: TaskState[];
    structure?: ClassifiedTaskFlowStructure;
}
export interface PendingReceivablesResultDataGroup {
    count?: number;
    debits?: number;
    credits?: number;
    dueDays?: number;
    net?: number;
}
export interface TaskFlowStructureResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface SynchronizeBusinessResult {
    synchronize?: SynchronizationStatus;
    errors?: UserError[];
}
export interface Customer extends Local {
    name: string;
    comment: string;
    meta: string;
    taxId: string;
    kind: string;
    representativeId: number;
    creditLimit: number;
    creditDays: number;
    contactId: number;
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
    tags: Tag[];
    business: Business;
    sales?: SaleDocument[];
    moons?: MoonAnalysisResult;
    receivables?: ReceivableDocument[];
    invoices?: SaleDocument[];
}
export interface ReceivableSummary {
    count?: number;
    total?: number;
}
export interface PendingReceivablesResultData {
    past?: PendingReceivablesResultDataGroup;
    future?: PendingReceivablesResultDataGroup;
    count?: number;
    debits?: number;
    credits?: number;
    dueDays?: number;
    net?: number;
}
export interface PendingDateSummaryByDate {
    date?: Date;
    all?: PendingSummaryByEntry;
    past?: PendingSummaryByBin[];
    future?: PendingSummaryByBin[];
}
export interface ClassifiedTaskFlowStructure {
    first?: TaskFlowStructure;
    pendings: TaskFlowStructure[];
    fulfilled?: TaskFlowStructure;
    rejected?: TaskFlowStructure;
}
export interface ReceivablePaymentHistoryResult {
    issued?: Date;
    total?: number;
}
export interface PendingSummaryByContact {
    customers?: PendingSummaryByCustomer[];
    contactName?: string;
    contactId?: number;
}
export interface ContactEmail extends ContactElement, Local {
    address: string;
    kind: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivableReconciliationDetail extends Local {
    entry: string;
    comment: string;
    meta: string;
    kind: string;
    originalCurrency: string;
    originalRate: number;
    displayLine: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
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
export interface Product extends Local {
    name: string;
    comment: string;
    price: number;
    unit: string;
    meta: string;
    kind: string;
    currency: string;
    unitListId: number;
    purchaseUnit: string;
    purchaseFactor: number;
    saleFactor: number;
    saleUnit: string;
    available: number;
    reserved: number;
    incoming: number;
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
export interface SaleDocument extends Local {
    entry: string;
    comment?: string;
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
    meta?: string;
    taxId?: string;
    kind: string;
    representativeId: number;
    displayOn?: Date;
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
export interface PendingReceivablesByDueDaysClassResultData {
    count?: number;
    debits?: number;
    credits?: number;
    dueDaysClass?: number;
}
export interface SynchronizationStatus {
    running?: Boolean;
    start?: Date;
    nextStart?: Date;
}
export interface CreateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface ContactAddress extends ContactElement, Local {
    country?: string;
    state?: string;
    street?: string;
    postal?: string;
    city?: string;
    kind: string;
    reference?: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesByDateHistoryResult {
    context?: PendingReceivablesByDateHistoryContext;
    datum?: PendingReceivablesByDateHistoryDatum;
    meta?: AnalysisResultMeta;
}
export interface PendingSummaryByDateDatesList {
    dates?: PendingDateSummaryByDate[];
    currency?: string;
}
export interface ReceivableSummaryByEntry {
    balance?: ReceivableSummary;
    debits?: ReceivableSummary;
    credits?: ReceivableSummary;
}
export interface UpdateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface UnitListDetail extends Local {
    kind: string;
    unitListId: number;
    alternativeUnit: string;
    alternativeFactor: number;
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
export interface DeleteConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface DeleteTaskStateResult {
    id?: ID;
    errors?: UserError[];
}
export interface UpdateMemberApplicationBusinessPermissionResult {
    permission?: MemberApplicationBusinessPermission;
    errors?: UserError[];
}
export interface ReceivableHistorySummaryContext {
    issuedFrom: Date;
    meanings?: string[];
    contact?: Contact;
    nominal?: Boolean;
    businessIds?: number[];
    currency?: string;
    currencies?: string[];
    zone?: string;
    now?: Date;
}
export interface DefaultTask {
    id: ID;
    zone?: string;
    due?: Date;
    description: string;
}
export interface DownloadablePackage {
    name?: string;
    id?: string;
    latestVersion?: DownloadablePackageVersion;
    versions?: DownloadablePackageVersion[];
}
export interface PriceListUnitDetail extends Local {
    price: number;
    unit: string;
    kind: string;
    productId: number;
    priceListId: number;
    currency: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivableSummary {
    count?: number;
    dueDays?: number;
    total?: number;
    pending?: number;
    issuedDays?: number;
}
export interface PendingSummaryByEntry {
    balance?: PendingReceivableSummary;
    debits?: PendingReceivableSummary;
    credits?: PendingReceivableSummary;
}
export interface Unit extends Local {
    name: string;
    code: string;
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
export interface PendingReceivablesByDateHistoryDatum {
    combined?: PendingSummaryByDateDatesList;
    separated?: PendingSummaryByDateDatesList[];
}
export interface AnalysisResultMeta {
    now?: Date;
    executionTime?: number;
}
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface ReceivableSummaryByDates {
    dates?: ReceivableSummaryByDate[];
    currency?: string;
}
export interface PendingReceivablesByDateHistoryContext {
    historyDays?: number;
    contact?: Contact;
    pastDays?: number[];
    futureDays?: number[];
    nominal?: Boolean;
    businessIds?: number[];
    currency?: string;
    currencies?: string[];
    zone?: string;
    now?: Date;
}
export interface ReceivableSummaryByDate {
    date?: Date;
    all?: ReceivableSummaryByEntry;
}
export interface ContactLocation extends ContactElement, Local {
    kind: string;
    latitude: number;
    longitude: number;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface MoonAnalysisResult {
    delay: QuintileValue;
    sales: QuintileValue;
}
export interface MemberApplicationPermission extends Local {
    meta: string;
    kind: string;
    memberId: number;
    configuration: string;
    applicationId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    member: Member;
    application: Application;
}
export interface DownloadApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
}
export interface Stock extends Local {
    kind: string;
    productId: number;
    available: number;
    reserved: number;
    incoming: number;
    warehouseId: number;
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
    price: number;
    kind: string;
    productId: number;
    priceListId: number;
    currency: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivableReconciliation extends Local {
    comment: string;
    issued: Date;
    meta: string;
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
    details?: ReceivableReconciliationDetail[];
}
export interface TaskFlowStructure extends Local {
    first: Boolean;
    status: string;
    flowId: number;
    stateId: number;
    kind: string;
    stateSequence: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    state: TaskState;
}
export interface PendingReceivablesByContactDatum {
    combined?: PendingContactSummaryDates;
    separated?: PendingContactSummaryDates[];
}
export interface PendingReceivableResultData {
    debits?: number;
    credits?: number;
    dueDays?: number;
    dueDaysClass?: number;
    customerName?: string;
    contactDisplayName?: string;
    contactId?: ID;
    customerId?: ID;
    customerRepresentativeId?: ID;
}
export interface UnitList extends Local {
    name: string;
    kind: string;
    baseUnit: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingSummaryByBin {
    bin?: number;
    balance?: PendingReceivableSummary;
    debits?: PendingReceivableSummary;
    credits?: PendingReceivableSummary;
}
export interface CreateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface PendingDateSummaryDates {
    dates?: PendingDateSummaryByDate;
    currency?: string;
}
export interface Representative extends Local {
    name: string;
    comment: string;
    meta: string;
    taxId: string;
    kind: string;
    contactId: number;
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
export interface UserError {
    name: string;
    value: string;
    code?: string;
}
export interface ReceivableHistorySummaryResult {
    context?: ReceivableHistorySummaryContext;
    datum?: ReceivableHistorySummaryDatum;
    meta?: AnalysisResultMeta;
}
export interface ContactAnniversary extends ContactElement, Local {
    year?: number;
    month: number;
    day: number;
    kind: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
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
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DownloadablePackageVersion {
    version?: string;
}
export interface ContactNetwork extends ContactElement, Local {
    handle: string;
    provider: string;
    kind: string;
    locus?: string;
    contactId: number;
    sequence: number;
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
    zone: string;
    locale: string;
    token: string;
    kind: string;
    configuration: string;
    currency: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    users: User[];
    businesses: Business[];
    applications: Application[];
}
export interface CreateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface businesses {
    ids?: ID[];
    pendingReceivables: PendingReceivablesByDateResult;
    pendingReceivablesHistory: PendingReceivablesByDateHistoryResult;
    receivableHistorySummary: ReceivableHistorySummaryResult;
    pendingReceivablesByDocument: PendingReceivablesByDocumentResult;
    pendingReceivablesByContact: PendingReceivablesByContactResult;
}
export interface BusinessCurrency extends Local {
    kind: string;
    currency: string;
    businessId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface HashtagReference extends Local {
    handle: string;
    kind: string;
    referenceId: number;
    hashtagId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesByDateDatum {
    combined?: PendingDateSummaryDates;
    separated?: PendingDateSummaryDates[];
}
export interface CreateTaskFlowResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface UpdateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface SaleDocumentDetail extends Local {
    entry: string;
    comment: string;
    price: number;
    unit: string;
    meaning: string;
    total: number;
    tax: number;
    profit: number;
    item: string;
    meta: string;
    kind: string;
    productId: number;
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
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface PendingReceivableByDocumentContextInput {
    meaning?: string[];
    businesses?: ID[];
    currencies?: string[];
    currency?: string;
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface PendingReceivablesHistoryContextInput {
    historyDays?: number;
    pastDays?: number[];
    futureDays?: number[];
    meanings?: string[];
    contactId?: ID;
    businesses?: ID[];
    currencies?: string[];
    currency?: string;
}
export interface ContactUrlActionsInput {
    create: ContactUrlIdInput[];
    update: ContactUrlIdInput[];
    delete: ID[];
}
export interface ContactEventFilterInput {
    days?: number;
}
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: ID;
}
export interface ContactAddressInput {
    country?: string;
    state?: string;
    street?: string;
    postal?: string;
    city?: string;
    reference?: string;
    locus?: string;
    sequence?: number;
}
export interface PendingReceivablesContextInput {
    pastDays?: number[];
    futureDays?: number[];
    meanings?: string[];
    contactId?: ID;
    businesses?: ID[];
    currencies?: string[];
    currency?: string;
}
export interface ContactPhoneInput {
    number?: string;
    locus?: string;
    sequence?: number;
}
export interface UpdateBusinessInput {
    country?: string;
    name?: string;
    provider?: string;
    zone?: string;
    locale?: string;
    enabled?: Boolean;
    taxId?: string;
    description?: string;
    configuration?: string;
    currency?: string;
    scheduled?: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    currencies?: string[];
}
export interface TaskFlowStructureInput {
    first?: Boolean;
    status?: string;
    stateSequence?: number;
}
export interface UserInput {
    handle?: string;
    zone?: string;
    role?: string;
    uid?: string;
    avatarX?: number;
    avatarY?: number;
    locale?: string;
    enabled?: Boolean;
    firstName?: string;
    lastName?: string;
    avatarOriginal?: Upload;
    password?: string;
    avatarInitials?: string;
    avatarColor?: string;
    avatarBackgroundColor?: string;
    avatarSize?: number;
    emailAddress?: string;
    phoneNumber?: string;
}
export interface ContactUrlInput {
    specification?: string;
    locus?: string;
    sequence?: number;
}
export interface ContactEmailInput {
    address?: string;
    locus?: string;
    sequence?: number;
}
export interface CreateNoteInput {
    referenceId?: ID;
    zone?: string;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
    latitude?: number;
    longitude?: number;
    description?: string;
}
export interface ContactFilterInput {
    q?: string;
}
export interface ContactInput {
    comment?: string;
    organizationName?: string;
}
export interface ContactEventsFilterInput {
    days?: number;
}
export interface CreateTaskFlowInput {
    color?: string;
    title?: string;
    backgroundColor?: string;
    description?: string;
}
export interface UpdateTaskInput {
    zone?: string;
    color?: string;
    due?: Date;
    title?: string;
    backgroundColor?: string;
    description?: string;
    responsibleId?: ID;
}
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
    delete: ID[];
}
export interface PendingReceivablesByContactContextInput {
    pastDays?: number[];
    futureDays?: number[];
    meanings?: string[];
    contactId?: ID;
    businesses?: ID[];
    currencies?: string[];
    currency?: string;
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
}
export interface BusinessFilterInput {
    enabled?: Boolean;
}
export interface ApplicationFilterInput {
    enabled?: Boolean;
    installed?: Boolean;
}
export interface ReceivableDocumentFilterInput {
    entry?: string;
    pending?: Boolean;
    remoteSource?: string;
}
export interface CreateBusinessInput {
    country?: string;
    name?: string;
    provider?: string;
    zone?: string;
    locale?: string;
    enabled?: Boolean;
    taxId?: string;
    description?: string;
    configuration?: string;
    currency?: string;
    scheduled?: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    currencies?: string[];
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface TagFilterInput {
    limit?: number;
    q?: string;
}
export interface UpdateTaskStateInput {
    color?: string;
    title?: string;
    backgroundColor?: string;
    description?: string;
    parentId?: ID;
    parentSequence?: number;
}
export interface UpdateNoteInput {
    zone?: string;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
    latitude?: number;
    longitude?: number;
    description?: string;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
    delete: ID[];
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
}
export interface UpdateTaskFlowInput {
    color?: string;
    title?: string;
    backgroundColor?: string;
    description?: string;
}
export interface ContactNetworkInput {
    handle?: string;
    provider?: string;
    locus?: string;
    sequence?: number;
}
export interface TagInput {
    name?: string;
    type?: string;
    color?: string;
    backgroundColor?: string;
    description?: string;
}
export interface UserFilterInput {
    q?: string;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
export interface ContactAnniversaryInput {
    year?: number;
    month?: number;
    day?: number;
    locus?: string;
    sequence?: number;
}
export interface CreateTaskStateInput {
    flowId?: ID;
    color?: string;
    title?: string;
    backgroundColor?: string;
    description?: string;
    parentId?: ID;
    parentSequence?: number;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
}
export interface BusinessCurrencyContextInput {
    businesses?: ID[];
    currencies?: string[];
    currency?: string;
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface ContactLocationInput {
    latitude?: number;
    longitude?: number;
    locus?: string;
    sequence?: number;
}
export interface ReceivablesHistorySummaryContextInput {
    issuedFrom?: Date;
    meanings?: string[];
    contactId?: ID;
    businesses?: ID[];
    currencies?: string[];
    currency?: string;
}
export interface ReceivablePaymentHistoryInputFilter {
    months?: number;
    customerContactId?: ID;
    representativeContactId?: ID;
    businessId?: ID[];
}
export interface CreateTaskInput {
    referenceId?: ID;
    supervise?: Boolean;
    parentId?: ID;
    zone?: string;
    color?: string;
    due?: Date;
    title?: string;
    backgroundColor?: string;
    description?: string;
    responsibleId?: ID;
}

