export type ID = string;
export type Instant = Date;
export type LocalDate = Date;
export type LocalDateTime = Date;
export type JSON = any;
export type URL = string;
export type Upload = any;
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
export interface Contact extends Local {
    comment: string;
    position: string;
    displayName: string;
    code: string;
    kind: string;
    meta: string;
    contactId: number;
    firstName: string;
    lastName: string;
    organizationName: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    tags: Tag[];
    phones: ContactPhone[];
    emails: ContactEmail[];
    notes: Note[];
    tasks: Task[];
    urls: ContactUrl[];
    networks: ContactNetwork[];
    addresses: ContactAddress[];
    locations: ContactLocation[];
    anniversaries: ContactAnniversary[];
    customers: Customer[];
    representatives: Representative[];
    receivableDocuments: ReceivableDocument[];
}
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
export interface Application extends Local {
    name: string;
    kind: string;
    enabled: Boolean;
    meta: string;
    installed: Boolean;
    configuration: string;
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
export interface CreateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface Business extends Local {
    zone: string;
    country: string;
    provider: string;
    name: string;
    boxId: number;
    taxId?: string;
    locale: string;
    kind: string;
    enabled: Boolean;
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
    synchronization?: SynchronizationStatus;
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
export interface PackageBundle {
    version?: string;
    name?: string;
    file?: string;
    vendor?: string;
    built?: Date;
    installed?: Date;
    provides?: string;
}
export interface PendingReceivableResultData {
    customerRepresentativeId?: ID;
    dueDays?: number;
    debits?: number;
    credits?: number;
    contactDisplayName?: string;
    customerName?: string;
    customerId?: ID;
    contactId?: ID;
    dueDaysClass?: number;
}
export interface SynchronizationStatus {
    start?: Date;
    running?: Boolean;
    nextStart?: Date;
}
export interface ReceivablePaymentHistoryResult {
    issued?: Date;
    total?: number;
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
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    details?: ReceivableReconciliationDetail[];
}
export interface UpdateMemberApplicationPermissionResult {
    permission?: MemberApplicationPermission;
    errors?: UserError[];
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
export interface MoonAnalysisResult {
    delay: QuintileValue;
    sales: QuintileValue;
}
export interface ContactNetwork extends ContactElement, Local {
    provider: string;
    handle: string;
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
export interface Organization extends Contact, Local {
    comment: string;
    position: string;
    displayName: string;
    code: string;
    kind: string;
    meta: string;
    contactId: number;
    firstName: string;
    lastName: string;
    organizationName: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TaskState extends Local {
    color: string;
    flowId: ID;
    title: string;
    kind: string;
    description?: string;
    parentId?: ID;
    parentSequence: number;
    backgroundColor: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Representative extends Local {
    comment: string;
    name: string;
    taxId: string;
    kind: string;
    meta: string;
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
export interface UpdateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface UpdateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface SaleDocument extends Local {
    comment?: string;
    entry: string;
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
    representativeId: number;
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
export interface DeleteConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface UpdateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface DeleteTaskStateResult {
    id?: ID;
    errors?: UserError[];
}
export interface PendingReceivablesResultDataGroup {
    count?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
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
export interface DownloadConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface Hashtag extends Local {
    handle: string;
    color: string;
    kind: string;
    description: string;
    backgroundColor: string;
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
export interface CreateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface DownloadApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
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
export interface UpdateNoteResult {
    note?: Note;
    errors?: UserError[];
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
export interface PendingReceivableResult {
    data?: PendingReceivableResultData[];
    representatives?: Representative[];
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
    user: User;
    box: Box;
}
export interface TaskFlow extends Local {
    color: string;
    title: string;
    kind: string;
    description?: string;
    backgroundColor: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    states?: TaskState[];
    structure?: ClassifiedTaskFlowStructure;
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
export interface CreateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
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
export interface CreateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface Note extends Local {
    zone: string;
    start: Date;
    locked: Boolean;
    pinned: Boolean;
    kind: string;
    description: string;
    displayOn?: Date;
    latitude?: number;
    longitude?: number;
    referenceId: number;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    hashtags?: Hashtag[];
}
export interface CreateContactResult {
    errors?: UserError[];
    contact?: Contact;
}
export interface Product extends Local {
    comment: string;
    name: string;
    price: number;
    unit: string;
    kind: string;
    meta: string;
    unitListId: number;
    purchaseUnit: string;
    purchaseFactor: number;
    saleFactor: number;
    saleUnit: string;
    available: number;
    reserved: number;
    incoming: number;
    currency: string;
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
export interface User extends Local {
    zone: string;
    handle?: string;
    uid?: string;
    avatarX?: number;
    avatarY?: number;
    locale: string;
    kind: string;
    enabled?: Boolean;
    avatarInitials: string;
    avatarColor: string;
    avatarBackgroundColor: string;
    avatarSize?: number;
    emailAddress?: string;
    emailAddressVerified?: Date;
    phoneNumber?: string;
    phoneNumberVerified?: Date;
    firstName: string;
    lastName?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    tasks?: Task[];
    avatar?: string;
    avatarOriginal?: string;
    role: string;
    applicationBusinessPermissions: MemberApplicationBusinessPermission[];
    applicationPermissions: MemberApplicationPermission[];
}
export interface Zone {
    name: string;
    offset: number;
    code: string;
    description: string;
}
export interface Customer extends Local {
    comment: string;
    name: string;
    taxId: string;
    kind: string;
    meta: string;
    contactId: number;
    representativeId: number;
    creditLimit: number;
    creditDays: number;
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
    invoices?: SaleDocument[];
    receivables?: ReceivableDocument[];
}
export interface ReceivableReconciliationDetail extends Local {
    comment: string;
    entry: string;
    receivableReconciliationId: number;
    kind: string;
    meta: string;
    originalCurrency: string;
    originalRate: number;
    displayLine: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
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
export interface ReceivablePending {
    count?: number;
    pending?: number;
    dueDays?: number;
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
export interface CreateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface PendingReceivablesByDueDaysClassResultData {
    count?: number;
    debits?: number;
    credits?: number;
    dueDaysClass?: number;
}
export interface UserError {
    name: string;
    value: string;
    code?: string;
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
    description?: string;
    stateSequence?: number;
    backgroundColor: string;
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
export interface PendingReceivablesResultData {
    past?: PendingReceivablesResultDataGroup;
    future?: PendingReceivablesResultDataGroup;
    count?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
}
export interface ReceivableDocument extends Local {
    comment?: string;
    entry: string;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    kind: string;
    meta?: string;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    displayOn?: Date;
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
    paid?: Date;
    customer?: Customer;
    reconciliationDetails?: ReceivableReconciliationDetail[];
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
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
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
export interface QuintileValue {
    value: number;
    count: number;
    quintile: number;
}
export interface ContactAnniversary extends ContactElement, Local {
    month: number;
    year?: number;
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
export interface BoxApplicationBusinessPermission extends Local {
    boxId: number;
    kind: string;
    meta: string;
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
export interface DownloadablePackageVersion {
    version?: string;
}
export interface CreateTaskFlowResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface MemberApplicationBusinessPermission extends Local {
    kind: string;
    meta: string;
    configuration: string;
    applicationId: number;
    businessId: number;
    memberId: number;
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
export interface Tag extends Local {
    color: string;
    meaning: string;
    kind: string;
    description: string;
    backgroundColor: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DeleteApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
}
export interface UpdateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface PendingReceivablesResult {
    data?: PendingReceivablesResultData;
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
export interface Person extends Contact, Local {
    comment: string;
    position: string;
    displayName: string;
    code: string;
    kind: string;
    meta: string;
    contactId: number;
    firstName: string;
    lastName: string;
    organizationName: string;
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
export interface DownloadablePackage {
    name?: string;
    id?: string;
    latestVersion?: DownloadablePackageVersion;
    versions?: DownloadablePackageVersion[];
}
export interface SynchronizeBusinessResult {
    synchronize?: SynchronizationStatus;
    errors?: UserError[];
}
export interface TaskFlowStructureResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface Box extends Local {
    zone: string;
    country: string;
    name: string;
    locale: string;
    kind: string;
    token: string;
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
export interface SaleDocumentDetail extends Local {
    comment: string;
    entry: string;
    price: number;
    unit: string;
    meaning: string;
    total: number;
    tax: number;
    profit: number;
    item: string;
    kind: string;
    meta: string;
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
export interface ClassifiedTaskFlowStructure {
    first?: TaskFlowStructure;
    pendings: TaskFlowStructure[];
    fulfilled?: TaskFlowStructure;
    rejected?: TaskFlowStructure;
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
export interface MemberApplicationPermission extends Local {
    kind: string;
    meta: string;
    configuration: string;
    applicationId: number;
    memberId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    member: Member;
    application: Application;
}
export interface UpdateMemberApplicationBusinessPermissionResult {
    permission?: MemberApplicationBusinessPermission;
    errors?: UserError[];
}
export interface ReceivablePendingByEntry {
    debits?: ReceivablePending;
    credits?: ReceivablePending;
}
export interface PendingReceivablesByDueDaysClassResult {
    data?: PendingReceivablesByDueDaysClassResultData[];
    pastDueDays?: number[];
    futureDueDays?: number[];
}
export interface DefaultTask {
    zone?: string;
    id: ID;
    due?: Date;
    description: string;
}
export interface BoxApplicationPermission extends Local {
    boxId: number;
    kind: string;
    meta: string;
    configuration: string;
    applicationId: number;
    version: number;
    id: ID;
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
export interface PendingReceivablesHistoryResult {
    data?: ReceivablePendingByDate[];
    now?: Date;
}
export interface CreateAddTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface UpdateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface ContactLocationInput {
    latitude?: number;
    longitude?: number;
    locus?: string;
    sequence?: number;
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
export interface TagInput {
    description?: string;
    type?: string;
    color?: string;
    parentId?: ID;
    backgroundColor?: string;
}
export interface UserInput {
    zone?: string;
    handle?: string;
    role?: string;
    uid?: string;
    avatarX?: number;
    avatarY?: number;
    locale?: string;
    enabled?: Boolean;
    avatarOriginal?: Upload;
    password?: string;
    avatarInitials?: string;
    avatarColor?: string;
    avatarBackgroundColor?: string;
    avatarSize?: number;
    emailAddress?: string;
    phoneNumber?: string;
    firstName?: string;
    lastName?: string;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
export interface ContactUrlInput {
    specification?: string;
    locus?: string;
    sequence?: number;
}
export interface UserFilterInput {
    q?: string;
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface UpdateBusinessInput {
    zone?: string;
    country?: string;
    provider?: string;
    name?: string;
    taxId?: string;
    locale?: string;
    enabled?: Boolean;
    description?: string;
    configuration?: string;
    currency?: string;
    scheduled?: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
}
export interface ReceivableDocumentFilterInput {
    entry?: string;
    pending?: Boolean;
    remoteSource?: string;
}
export interface UpdateNoteInput {
    zone?: string;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
    description?: string;
    latitude?: number;
    longitude?: number;
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
}
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: ID;
}
export interface CreateTaskFlowInput {
    color?: string;
    title?: string;
    description?: string;
    backgroundColor?: string;
}
export interface UpdateTaskFlowInput {
    color?: string;
    title?: string;
    description?: string;
    backgroundColor?: string;
}
export interface ContactPhoneInput {
    number?: string;
    locus?: string;
    sequence?: number;
}
export interface ReceivablePaymentHistoryInputFilter {
    months?: number;
    businessId?: ID[];
    customerContactId?: ID;
    representativeContactId?: ID;
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
}
export interface ContactFilterInput {
    q?: string;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
export interface TaskFlowStructureInput {
    first?: Boolean;
    status?: string;
    stateSequence?: number;
}
export interface ContactNetworkInput {
    provider?: string;
    handle?: string;
    locus?: string;
    sequence?: number;
}
export interface ContactEmailInput {
    address?: string;
    locus?: string;
    sequence?: number;
}
export interface ApplicationFilterInput {
    enabled?: Boolean;
    installed?: Boolean;
}
export interface TagFilterInput {
    q?: string;
    limit?: number;
}
export interface BusinessFilterInput {
    enabled?: Boolean;
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
}
export interface CreateBusinessInput {
    zone?: string;
    country?: string;
    provider?: string;
    name?: string;
    taxId?: string;
    locale?: string;
    enabled?: Boolean;
    description?: string;
    configuration?: string;
    currency?: string;
    scheduled?: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
}
export interface CreateTaskInput {
    supervise?: Boolean;
    parentId?: ID;
    referenceId?: ID;
    zone?: string;
    color?: string;
    due?: Date;
    title?: string;
    description?: string;
    responsibleId?: ID;
    backgroundColor?: string;
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
}
export interface ContactAnniversaryInput {
    month?: number;
    year?: number;
    day?: number;
    locus?: string;
    sequence?: number;
}
export interface CreateNoteInput {
    referenceId?: ID;
    zone?: string;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
    description?: string;
    latitude?: number;
    longitude?: number;
}
export interface UpdateTaskInput {
    zone?: string;
    color?: string;
    due?: Date;
    title?: string;
    description?: string;
    responsibleId?: ID;
    backgroundColor?: string;
}
export interface ContactInput {
    comment?: string;
    organizationName?: string;
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface CreateTaskStateInput {
    flowId?: ID;
    color?: string;
    title?: string;
    description?: string;
    parentId?: ID;
    parentSequence?: number;
    backgroundColor?: string;
}
export interface UpdateTaskStateInput {
    color?: string;
    title?: string;
    description?: string;
    parentId?: ID;
    parentSequence?: number;
    backgroundColor?: string;
}
export interface ContactEventFilterInput {
    days?: number;
}
export interface ContactEventsFilterInput {
    days?: number;
}
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
    delete: ID[];
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
    delete: ID[];
}
export interface ContactUrlActionsInput {
    create: ContactUrlIdInput[];
    update: ContactUrlIdInput[];
    delete: ID[];
}

