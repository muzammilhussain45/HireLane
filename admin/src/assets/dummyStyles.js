// src/assets/dummyStyles.js
export const addJobsPageStyles = {
  // Toast
  toastWrapper: "fixed top-4 right-2 sm:right-4 z-[200] animate-slide-in",
  toastContent:
    "flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 rounded-2xl shadow-2xl border-l-4 backdrop-blur-sm",
  toastSuccess: "bg-green-100/90 border-green-500 text-green-800",
  toastError: "bg-red-100/90 border-red-500 text-red-800",
  toastDot: "w-3 h-3 rounded-full animate-ping",
  toastDotSuccess: "bg-green-500",
  toastDotError: "bg-red-500",
  toastDotStatic: "absolute inset-0 w-3 h-3 rounded-full",
  toastMessage: "font-semibold text-sm sm:text-base",
  toastCloseBtn:
    "ml-3 sm:ml-4 hover:rotate-90 transition-transform duration-300",

  // AnimatedField
  fieldContainer: "space-y-2 w-full",
  fieldLabel: "block text-sm font-medium text-[#36566a]",
  requiredStar: "text-red-500",
  fieldWrapper: "relative group transition-all duration-300",
  fieldFocusedScale: "scale-[1.02]",
  fieldGlow:
    "absolute inset-0 bg-linear-to-r from-[#d7e9f5] to-[#e8f2f9] rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500",
  fieldInner:
    "relative flex items-center border-2 rounded-xl overflow-hidden transition-all duration-300",
  fieldInnerError: "border-red-300 bg-red-50",
  fieldInnerFocused: "border-[#126db3]/35 bg-white shadow-lg shadow-indigo-100",
  fieldInnerDefault: "border-[#071522]/12 bg-white/80 hover:border-[#126db3]/30",
  fieldIconSpan: "pl-3 sm:pl-4 text-[#8da1ad]",
  fieldIconFocused: "text-[#126db3]",
  fieldInputWrapper: "relative flex-1",
  selectInput:
    "w-full px-3 py-2 sm:px-3 sm:py-3 bg-transparent outline-none appearance-none cursor-pointer text-sm sm:text-base",
  textareaInput:
    "w-full px-3 py-2 sm:px-3 sm:py-3 bg-transparent outline-none resize-none text-sm sm:text-base",
  inputBase:
    "w-full px-3 py-2 sm:px-3 sm:py-3 bg-transparent outline-none text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed",
  requiredSpan: "pr-3 sm:pr-4 text-red-400 text-sm",
  errorText: "text-red-500 text-sm mt-1 animate-shake",

  // ImageUpload
  uploadContainer: "space-y-2",
  uploadLabel: "flex items-center gap-2 text-[#36566a] font-semibold",
  uploadIcon: "text-[#126db3]",
  uploadRequired: "text-red-500",
  uploadDropzone:
    "relative border-2 border-dashed rounded-xl p-4 sm:p-6 transition-all duration-300",
  uploadDropzoneActive: "border-[#126db3]/35 bg-[#e8f2f9]",
  uploadDropzoneError: "border-red-300 bg-red-50",
  uploadDropzonePreview: "border-[#126db3]/30 bg-[#e8f2f9]/50",
  uploadDropzoneDefault: "border-[#071522]/18 bg-[#f7f5f0] hover:border-[#126db3]/30",
  previewContainer: "relative flex justify-center",
  previewImage: "max-h-20 sm:max-h-32 rounded-lg object-contain",
  removeImageBtn:
    "absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors",
  uploadPlaceholder: "text-center",
  uploadIconLarge: "mx-auto h-10 w-10 sm:h-12 sm:w-12 text-[#8da1ad]",
  uploadText: "mt-2 text-sm sm:text-sm text-[#486274]",
  browseLabel: "text-[#126db3] hover:text-[#07508b] cursor-pointer font-bold",
  fileInputHidden: "hidden",

  // Main layout
  pageContainer:
    "min-h-screen font-sans bg-linear-to-br from-[#e8f2f9] via-white to-[#d7e9f5] py-8 sm:py-12 px-3 sm:px-4",
  contentWrapper: "max-w-5xl mx-auto",
  headerCenter: "text-center mb-6 sm:mb-8",
  title:
    "text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#126db3] to-purple-600 flex items-center justify-center gap-3",
  titleInner: "leading-tight",
  subtitle: "text-[#708694] mt-2 text-sm sm:text-base",
  formCard:
    "bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 border border-white/30",

  // Grids
  grid3: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6",
  grid2: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
  colSpan1: "col-span-1",
  mdColSpan2: "md:col-span-2 space-y-3 sm:space-y-4",

  // Array sections
  arraySection: "space-y-3",
  arrayLabel: "flex items-center gap-2 text-[#36566a] font-semibold",
  arrayItemRow: "flex gap-2 flex-col sm:flex-row items-start",
  arrayInput:
    "flex-1 px-3 py-2 sm:px-4 sm:py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 text-sm sm:text-base",
  arrayInputError: "border-red-300 bg-red-50 focus:ring-red-200",
  arrayInputDefault:
    "border-[#071522]/12 bg-white/80 focus:border-[#126db3]/35 focus:ring-4 focus:ring-indigo-100",
  removeBtn:
    "p-2 sm:p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all hover:scale-110",
  addBtn:
    "flex items-center gap-1 text-[#126db3] hover:text-[#07508b] text-sm font-medium transition-transform hover:translate-x-1",

  // Salary specific
  salaryContainer: "w-full",
  salaryLabel: "block text-sm font-medium text-[#36566a]",
  salaryInputWrapper: "mt-2",
  salaryInputGroup:
    "flex items-center border-2 rounded-xl overflow-hidden transition-all duration-300",
  salaryInputGroupError: "border-red-300 bg-red-50",
  salaryInputGroupFilled:
    "border-[#126db3]/35 bg-white shadow-lg shadow-indigo-100",
  salaryInputGroupDefault:
    "border-[#071522]/12 bg-white/80 hover:border-[#126db3]/30",
  salaryIconSpan: "pl-3 sm:pl-4 text-[#8da1ad]",
  salaryIconFilled: "text-[#126db3]",
  salaryAmountInput:
    "w-full px-3 py-2 sm:px-3 sm:py-3 bg-transparent outline-none text-sm sm:text-base",
  salaryPeriodSelect:
    "px-2 sm:px-3 py-2 sm:py-3 bg-transparent outline-none border-l-2 border-[#071522]/12 cursor-pointer text-sm sm:text-base",

  // Submit button
  submitBtn:
    "w-full cursor-pointer bg-linear-to-r from-[#126db3] to-purple-600 text-white font-bold py-3 sm:py-4 px-5 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#126db3]/25 text-sm sm:text-base flex items-center justify-center gap-2",
  submitBtnDisabled: "opacity-70 cursor-not-allowed",
  spinnerIcon: "w-5 h-5 animate-spin",
};

export const dashboardStyles = {
  // Main container
  container:
    "min-h-screen font-sans bg-linear-to-br from-[#e8f2f9] via-white to-[#d7e9f5]/30",

  // Toast
  toastWrapper: "fixed top-28 right-6 z-[200] animate-slideIn",
  toastBase:
    "flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl border-l-4",
  toastSuccess: "bg-[#e4f4ec] border-emerald-500 text-emerald-800",
  toastError: "bg-rose-50 border-rose-500 text-rose-800",
  toastDefault: "bg-white border-blue-400 text-[#071522]",
  toastIconSuccess: "text-[#17756f]",
  toastIconError: "text-rose-600",
  toastIconDefault: "text-[#126db3]",
  toastMessage: "font-semibold text-sm",
  toastButtonContainer: "mt-3 flex gap-2",
  toastConfirmBtn:
    "px-4 py-1.5 rounded-full bg-rose-500 text-white text-xs font-bold hover:bg-rose-600 transition-all shadow-md active:scale-95 cursor-pointer",
  toastCancelBtn:
    "px-4 py-1.5 rounded-full bg-[#eef4e9] text-[#486274] text-xs font-bold hover:bg-[#d7e9f5] transition-all cursor-pointer",
  toastCloseBtn: "ml-2 text-[#8da1ad] hover:text-[#486274]",
  toastFlex: "flex-1",

  // Content wrapper
  contentWrapper:
    "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12",

  // Header
  headerContainer:
    "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-10 animate-fadeIn",
  headerTitle:
    "text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-[#071522] to-[#486274] bg-clip-text text-transparent",
  headerSubtitle:
    "text-[#708694] mt-2 flex items-center gap-2 text-sm sm:text-sm",
  headerIcon: "w-4 h-4 text-[#17756f]",

  // Stats Cards Grid
  statsGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 sm:mb-12",

  // Stats Card
  statCard:
    "group relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-[#071522]/10/80 overflow-hidden",
  statCardOverlay:
    "absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out",
  statCardContent:
    "relative p-4 sm:p-6 md:p-8 flex items-center justify-between",
  statCardTextContainer: "space-y-1 sm:space-y-2",
  statCardLabel:
    "text-xs sm:text-sm font-medium text-[#708694] uppercase tracking-wider",
  statCardValue: "text-2xl sm:text-3xl md:text-4xl font-bold text-[#071522]",
  statCardIconWrapper:
    "p-3 sm:p-4 md:p-4 rounded-3xl shadow-lg transform transition-transform duration-300",
  statCardIcon: "w-6 h-6 sm:w-8 sm:h-8 text-white",

  // Filters Section
  filtersContainer:
    "mb-6 sm:mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm border border-[#071522]/12/50 animate-fadeIn animation-delay-100",
  filtersHeader: "flex items-center justify-between flex-wrap gap-3",
  filtersTitleContainer: "flex items-center gap-3",
  filtersIcon: "w-4 h-4 text-[#708694]",
  filtersTitle: "text-base sm:text-lg font-semibold text-[#36566a]",
  filtersClearBtn:
    "flex items-center gap-2 text-sm text-[#708694] hover:text-[#36566a] transition-colors",
  filtersGrid: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4",

  // Filter Input
  filterInputContainer: "relative",
  filterLabel: "block text-xs sm:text-xs font-medium text-[#8da1ad] mb-1",
  filterInputWrapper: "relative",
  filterSearchIcon:
    "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8da1ad]",
  filterSelect:
    "w-full pl-9 pr-3 py-2 sm:py-3 bg-white border border-[#071522]/12 rounded-xl text-sm sm:text-sm text-[#36566a] focus:outline-none focus:ring-2 focus:ring-[#126db3]/25 appearance-none",

  // Jobs Section
  jobsSection: "animate-fadeIn animation-delay-200",
  jobsHeader: "flex items-center justify-between mb-5 sm:mb-6",
  jobsTitle:
    "text-xl sm:text-2xl font-semibold text-[#071522] flex items-center gap-3",
  jobsTitleIcon: "w-5 h-5 sm:w-6 sm:h-6 text-[#486274]",
  jobsFilterContainer: "flex items-center gap-3",
  jobsStatusSelect:
    "text-xs sm:text-sm font-medium border border-[#071522]/12 rounded-full px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#126db3]/25 cursor-pointer bg-white",
  jobsCount:
    "text-sm text-[#8da1ad] bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm border border-[#071522]/10",

  // Loading
  loadingContainer: "text-center py-20",
  loadingSpinner:
    "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto",

  // Jobs Grid
  jobsGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",

  // Job Card
  jobCard:
    "group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#071522]/10 overflow-hidden",
  jobCardOverlay:
    "absolute inset-0 bg-linear-to-br from-[#e8f2f9]/30 to-[#d7e9f5]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  jobCardContent: "relative p-4 sm:p-5 md:p-6",
  jobCardHeader: "flex items-start gap-3 sm:gap-4",

  // Job Logo
  jobLogoContainer: "relative shrink-0",
  jobLogoWrapper:
    "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-[#eef4e9] flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-shadow",
  jobLogo: "w-full h-full object-cover",
  jobLogoFallback:
    "hidden w-full h-full bg-linear-to-br from-[#d7e9f5] to-[#c9d5dd] items-center justify-center",
  jobLogoFallbackIcon: "w-5 h-5 sm:w-6 sm:h-6 text-[#486274]",

  // Job Details
  jobDetails: "flex-1 min-w-0",
  jobRole:
    "text-base sm:text-lg font-bold text-[#126db3] group-hover:text-[#126db3] transition-colors",
  jobCompany:
    "text-sm font-medium text-[#486274] flex items-center gap-1 mt-0.5",
  jobCompanyIcon: "w-3.5 h-3.5 text-[#8da1ad] shrink-0",
  jobLocation:
    "text-xs sm:text-sm text-[#17756f] mt-1 flex items-center gap-1",
  jobLocationIcon: "w-3 h-3 text-[#17756f]",

  // Job Meta
  jobMeta: "mt-4 sm:mt-5 flex items-center justify-between",
  jobCategory:
    "inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-[#eef4e9] text-[#36566a] border border-[#071522]/12",
  jobApplicants: "flex items-center gap-1.5 text-sm",
  jobApplicantsIcon: "w-4 h-4 text-[#8da1ad]",
  jobApplicantsCount: "font-semibold text-[#36566a]",
  jobApplicantsLabel: "text-[#8da1ad] text-xs",

  // Job Actions
  jobActions:
    "relative pt-4 flex items-center justify-center gap-3 duration-300 pointer-events-none",
  viewApplicantsBtn:
    "pointer-events-auto bg-linear-to-r from-[#126db3] to-[#d7e9f5]0 text-white cursor-pointer px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg hover:shadow-xl transform transition-all hover:scale-105",
  closeJobBtn:
    "pointer-events-auto bg-linear-to-r from-[#d85f2a] to-[#b8572a] text-white cursor-pointer px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg hover:shadow-xl transform transition-all hover:scale-105",

  // Empty State
  emptyState:
    "text-center py-12 sm:py-16 bg-white/50 rounded-3xl border border-[#071522]/10",
  emptyStateIcon: "w-12 h-12 text-slate-300 mx-auto mb-4",
  emptyStateTitle: "text-lg font-medium text-[#486274]",
  emptyStateText: "text-sm text-[#8da1ad] mt-1",
  emptyStateBtn:
    "mt-4 px-6 py-2 bg-[#e8f2f9] text-[#126db3] rounded-full text-sm font-medium hover:bg-[#d7e9f5] transition-colors",

  // Animation styles (will be injected separately)
  animations: `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeIn {
      animation: fadeIn 0.8s ease-out forwards;
    }
    .animation-delay-100 {
      animation-delay: 0.1s;
      opacity: 0;
      animation-fill-mode: forwards;
    }
    .animation-delay-200 {
      animation-delay: 0.2s;
      opacity: 0;
      animation-fill-mode: forwards;
    }
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .animate-slideIn {
      animation: slideIn 0.3s ease-out forwards;
    }
  `,
};

// Color mappings for dynamic stats cards
export const statColors = {
  blue: {
    gradient: "from-[#126db3] to-[#126db3]",
    bgLight: "bg-[#e8f2f9]",
  },
  rose: {
    gradient: "from-[#d85f2a] to-[#b8572a]",
    bgLight: "bg-rose-50",
  },
  emerald: {
    gradient: "from-emerald-500 to-teal-400",
    bgLight: "bg-[#e4f4ec]",
  },
  amber: {
    gradient: "from-[#c8f45b] to-[#d85f2a]",
    bgLight: "bg-amber-50",
  },
};

export const companiesPageStyles = {
  // Layout
  pageContainer:
    "min-h-screen font-sans bg-linear-to-br from-[#e8f2f9] via-white to-[#d7e9f5] p-6 sm:p-4 md:p-6",
  contentWrapper: "max-w-3xl mx-auto",

  // Toast
  toastWrapper: "fixed top-6 right-6 z-[200] animate-slideIn",
  toastBase:
    "flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border-l-4",
  toastSuccess: "bg-[#e4f4ec] border-emerald-500 text-emerald-800",
  toastError: "bg-amber-50 border-amber-500 text-amber-800",
  toastConfirm: "bg-white/90 border-[#071522]/12 text-[#071522]",
  toastIconSuccess: "text-[#17756f]",
  toastIconError: "text-amber-600",
  toastIconConfirm: "text-[#8da1ad]",
  toastContent: "flex-1",
  toastMessage: "font-medium",
  toastActionRow: "mt-2 flex gap-2",
  toastConfirmBtn:
    "inline-flex cursor-pointer items-center gap-2 px-3 py-1.5 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700 transition-shadow shadow-sm",
  toastCancelBtn:
    "inline-flex cursor-pointer items-center gap-2 px-3 py-1.5 rounded-lg bg-[#eef4e9] text-[#36566a] text-sm hover:bg-[#d7e9f5] transition",
  toastCloseBtn: "ml-4 text-[#708694] hover:text-[#36566a]",

  // Header
  header: "text-center mb-10",
  headerTitle:
    "text-4xl font-bold bg-linear-to-r from-[#126db3] to-purple-600 bg-clip-text text-transparent mb-2",
  headerSubtitle: "text-[#486274]",

  // Form Card
  formCard:
    "bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 sm:p-6 md:p-8",
  form: "space-y-6",

  // Logo Upload
  logoLabel: "block text-sm font-medium text-[#36566a] mb-1",
  requiredStar: "text-red-500",
  logoContainer: "flex items-center gap-4 sm:gap-6",
  previewWrapper: "shrink-0",
  previewBox:
    "relative w-16 h-16 sm:w-20 md:w-24 rounded-xl overflow-hidden border-2 border-[#126db3]/25 shadow-md",
  previewImage: "w-full h-full object-contain",
  removeLogoBtn:
    "absolute top-1 cursor-pointer right-1 bg-red-500 text-white rounded-full p-0.5 shadow hover:bg-red-600",
  placeholderBox:
    "w-16 h-16 sm:w-20 md:w-24 cursor-pointer rounded-xl bg-[#eef4e9] border-2 border-dashed border-[#071522]/18 flex items-center justify-center text-[#8da1ad]",
  uploadArea: "flex-1",
  uploadLabel:
    "cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-[#e8f2f9] text-[#07508b] rounded-lg hover:bg-[#d7e9f5] transition-colors border border-[#126db3]/25",
  fileInputHidden: "hidden",
  errorText: "mt-1 text-xs text-red-600",

  // Website Input
  websiteLabel: "block text-sm font-medium text-[#36566a] mb-1",
  inputWrapper: "relative",
  inputIcon: "absolute left-3 top-1/2 -translate-y-1/2 text-[#8da1ad]",
  websiteInput:
    "w-full pl-10 pr-4 py-2.5 rounded-lg border focus:ring focus:outline-none transition bg-white/50 backdrop-blur-sm",
  inputError: "border-red-300 focus:border-red-500 focus:ring-red-200",
  inputDefault:
    "border-[#071522]/18 focus:border-[#126db3]/30 focus:ring-indigo-200",

  // Submit Button
  submitSection: "pt-4",
  submitBtn:
    "w-full cursor-pointer bg-linear-to-r from-[#126db3] to-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#126db3]/25 focus:outline-none flex items-center justify-center gap-2",
  submitBtnDisabled: "opacity-70 cursor-not-allowed",
  spinner: "animate-spin",

  // Companies List
  listSection: "mt-8",
  listTitle: "text-xl font-semibold mb-4",
  grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
  companyCard:
    "relative bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40 shadow-sm flex flex-col items-start gap-3",
  cardLogoWrapper: "w-full flex items-center justify-center mb-2",
  cardLogoBox:
    "w-16 h-16 sm:w-20 md:w-24 rounded-md overflow-hidden border border-[#071522]/12 bg-white flex items-center justify-center",
  cardLogoImage: "max-w-full max-h-full object-contain",
  cardNoImage: "text-[#8da1ad]",
  cardDetails: "flex-1 w-full",
  cardLink: "text-[#07508b] font-medium hover:underline wrap-break-word",
  cardDeleteWrapper: "w-full flex justify-end",
  deleteBtn: "text-red-500 cursor-pointer hover:text-red-600 p-2 rounded-md",
};

export const companyQuestionPageStyles = {
  // Layout
  pageContainer:
    "min-h-screen font-sans bg-linear-to-br from-[#e8f2f9] via-white to-[#d7e9f5] p-6 sm:p-4 md:p-6",
  contentWrapper: "max-w-5xl mx-auto",

  // Toast
  toastWrapper: "fixed top-6 right-6 z-[200] animate-slideIn",
  toastBase:
    "flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border-l-4",
  toastSuccess: "bg-[#e4f4ec] border-emerald-500 text-emerald-800",
  toastError: "bg-amber-50 border-amber-500 text-amber-800",
  toastIconSuccess: "text-[#17756f]",
  toastIconError: "text-amber-600",
  toastMessage: "font-medium",
  toastCloseBtn: "ml-4 text-[#708694] hover:text-[#36566a]",

  // Header
  header: "text-center mb-8",
  headerTitle:
    "text-3xl py-3 md:text-4xl font-bold bg-linear-to-r from-[#126db3] to-purple-600 bg-clip-text text-transparent mb-2",
  headerSubtitle: "text-[#486274]",

  // Form Card
  formCard:
    "bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 mb-8",
  form: "space-y-5",
  gridRow: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 items-start",
  colSpan2: "md:col-span-2",
  colSpan2Alt: "md:col-span-2",

  // Labels & Inputs
  label: "block text-sm font-medium text-[#36566a] mb-1",
  requiredStar: "text-red-500",
  inputWrapper: "relative",
  inputIcon: "absolute left-3 top-1/2 -translate-y-1/2 text-[#8da1ad]",
  inputField:
    "w-full pl-10 pr-4 py-2.5 rounded-lg border focus:ring focus:outline-none transition bg-white/50 backdrop-blur-sm",
  inputError: "border-red-300 focus:border-red-500 focus:ring-red-200",
  inputDefault:
    "border-[#071522]/18 focus:border-[#126db3]/30 focus:ring-indigo-200",
  errorText: "mt-1 text-xs text-red-600",

  // Questions Count specific
  countHelperRow: "mt-1 flex items-center justify-between gap-2",
  countHelperText: "text-xs text-[#708694]",
  countDisplayValue: "font-medium text-[#36566a]",
  countHint: "text-xs text-[#8da1ad]",

  // Logo Upload
  logoContainer: "flex items-center gap-4",
  logoPreviewWrapper: "shrink-0",
  logoPreviewBox:
    "relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-[#126db3]/25 shadow-md",
  logoPreviewImage: "w-full h-full object-cover",
  removeLogoBtn:
    "absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 shadow hover:bg-red-600",
  logoPlaceholder:
    "w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#eef4e9] border-2 border-dashed border-[#071522]/18 flex items-center justify-center text-[#8da1ad]",
  logoUploadArea: "",
  logoUploadLabel:
    "cursor-pointer inline-flex items-center gap-2 px-3 py-2 bg-[#e8f2f9] text-[#07508b] rounded-lg hover:bg-[#d7e9f5] transition-colors border border-[#126db3]/25",
  fileInputHidden: "hidden",
  logoHint: "mt-1 text-xs text-[#708694]",

  // CSV Upload
  csvUploadContainer: "flex flex-col md:flex-row md:items-center gap-3",
  csvUploadLabel:
    "cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-[#e8f2f9] text-[#07508b] rounded-lg hover:bg-[#d7e9f5] transition-colors border border-[#126db3]/25",
  csvFileName: "block mt-2 md:inline md:ml-3 text-sm text-[#486274]",
  csvLoadedBadge:
    "text-sm text-[#17756f] bg-[#e4f4ec] px-3 py-1 rounded-full flex items-center gap-1",

  // Submit Button
  submitSection: "pt-2",
  submitBtn:
    "w-full cursor-pointer md:w-1/3 bg-linear-to-r from-[#126db3] to-purple-600 text-white font-medium py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#126db3]/25 focus:outline-none flex items-center justify-center gap-2",
  submitBtnDisabled: "opacity-70 cursor-not-allowed",
  spinner: "w-5 h-5 animate-spin",

  // Parsed Questions Section
  questionsSection:
    "bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 mb-8",
  sectionTitle:
    "text-xl font-semibold text-[#071522] mb-4 flex items-center gap-2",
  sectionTitleIcon: "text-[#126db3]",
  questionsGrid:
    "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4",

  // Question Card
  questionCard:
    "group p-4 bg-white rounded-xl border border-[#071522]/12 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#126db3]/25 animate-card",
  cardInner: "flex gap-3",
  cardIcon: "shrink-0 text-[#126db3] mt-0.5",
  cardContent: "flex-1",
  cardHeader: "flex items-start justify-between gap-2",
  cardQuestion:
    "font-medium text-[#071522] group-hover:text-[#07508b] transition-colors",
  cardQuestionMissing: "text-[#8da1ad]",
  cardDateBadge: "text-xs text-[#708694] bg-[#eef4e9] px-2 py-0.5 rounded-full",
  answerSection: "mt-2 text-sm text-[#486274]",
  answerLabel: "font-medium mb-1 flex items-center gap-1",
  answerIcon: "text-amber-500",
  answerContent:
    "prose-sm max-w-none text-[#36566a] bg-[#f7f5f0] p-2 rounded-lg border border-[#071522]/10",
  keyPointsSection: "mt-3",
  keyPointsLabel:
    "text-xs font-semibold text-amber-700 mb-1 flex items-center gap-1",
  keyPointsList: "list-disc list-inside text-xs text-[#36566a] space-y-1",
  keyPointItem: "flex items-start gap-2",
  keyPointIcon: "mt-0.5 text-[#071522] shrink-0",
};

export const listCompanyQuestionStyles = {
  // Main container
  container: "p-6 sm:p-4 md:p-6 bg-[#f7f5f0] font-sans min-h-screen",

  // Header
  header: "flex items-center gap-3 mb-8",
  headerIcon: "text-[#126db3]",
  headerTitle: "text-3xl font-bold text-[#071522]",

  // Loading state
  loadingContainer: "flex flex-col items-center py-20",
  loadingSpinner: "animate-spin text-[#126db3] mb-2",
  loadingText: "text-[#708694]",

  // Empty state
  emptyState: "text-center py-20 text-[#708694]",

  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6",

  // Company Card
  card: "group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 overflow-hidden flex flex-col relative",

  // Card Image Section
  cardImageContainer:
    "h-36 sm:h-40 md:h-48 lg:h-48 bg-linear-to-r from-[#e8f2f9] to-[#d7e9f5] overflow-hidden flex items-center justify-center",
  cardImage: "w-full h-full object-contain",
  cardImageFallback: "flex flex-col items-center justify-center text-[#8da1ad]",

  // Action Buttons Overlay
  actionButtonsOverlay:
    "absolute right-3 top-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
  editButton:
    "p-2 cursor-pointer bg-white rounded-full shadow-sm hover:bg-[#e8f2f9]",
  editIcon: "text-[#126db3]",
  deleteButton:
    "p-2 cursor-pointer bg-white rounded-full shadow-sm hover:bg-red-50",
  deleteIcon: "text-red-600",

  // Card Content
  cardContent: "p-5 flex-1 flex flex-col justify-between",
  cardTitle: "text-lg font-semibold text-[#071522] mb-2 line-clamp-1",

  // Card Info Section
  cardInfoContainer: "flex flex-wrap items-center gap-3 text-sm text-[#486274]",
  questionsInfo: "flex items-center gap-2",
  questionsLabel: "font-medium",
  questionsBadge: "bg-[#d7e9f5] text-blue-800 px-2 py-0.5 rounded-full text-xs",

  // CSV Info
  csvInfo: "flex items-center gap-2",
  csvIcon: "text-green-600",
  csvLink: "truncate text-xs text-[#126db3] hover:underline",
  csvText: "truncate text-xs",

  // Card Footer
  cardFooter: "mt-4 flex items-center justify-between",
  cardMeta: "text-xs text-[#708694]",
  cardActions: "flex items-center gap-2",
  cardEditBtn:
    "px-3 cursor-pointer py-1 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition",
  cardDeleteBtn:
    "px-3 cursor-pointer py-1 text-sm border border-[#071522]/12 rounded-full hover:bg-[#f7f5f0] transition",

  // Toast
  toastWrapper:
    "fixed top-28 right-6 z-[200] w-full max-w-sm transform transition-all",
  toastVisible: "translate-y-0 opacity-100",
  toastHidden: "translate-y-2 opacity-0",
  toastContainer: "rounded-lg shadow-lg overflow-hidden",
  toastSuccess: "bg-green-50 border-l-4 border-green-500",
  toastError: "bg-red-50 border-l-4 border-red-500",
  toastConfirm: "bg-yellow-50 border-l-4 border-yellow-500",
  toastContent: "p-3 flex items-start gap-3",
  toastIconSuccess: "h-5 w-5 text-green-500",
  toastIconError: "h-5 w-5 text-red-500",
  toastIconConfirm: "h-5 w-5 text-yellow-500",
  toastMessageContainer: "flex-1",
  toastMessage: "text-sm text-[#36566a]",
  toastConfirmButtons: "mt-2 flex gap-2",
  toastConfirmBtn:
    "px-3 cursor-pointer py-1 bg-yellow-600 text-white rounded text-sm",
  toastCancelBtn:
    "px-3 cursor-pointer py-1 bg-[#d7e9f5] text-[#071522] rounded text-sm",
  toastCloseBtn: "text-[#8da1ad] hover:text-[#486274]",

  // Modal
  modalOverlay:
    "fixed inset-0 z-40 pt-30 md:pt-35 lg:pt-50 xl:pt-25 flex items-start sm:items-center justify-center p-4 overflow-y-auto",
  modalBackdrop: "absolute inset-0 bg-black/30 backdrop-blur-sm",
  modalContainer:
    "relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-y-auto max-h-[90vh] mx-4",
  modalContent: "p-6 space-y-4",

  // Modal Header
  modalHeader: "flex justify-end",
  modalCloseBtn:
    "p-1 text-red-500 cursor-pointer hover:bg-red-50 rounded-full transition",

  // Form Fields
  formGroup: "",
  formLabel: "block text-sm font-medium text-[#36566a] mb-1",
  formInput:
    "w-full px-3 py-2 border border-[#071522]/18 rounded-lg outline-none focus:ring-2 focus:ring-blue-500",
  formHelper: "text-xs text-[#8da1ad] mt-1",

  // Image Upload
  imagePreviewContainer: "relative",
  imagePreview: "w-full h-40 object-contain rounded-lg",
  imageRemoveBtn:
    "absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full",
  imageUploadLabel:
    "flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-[#071522]/18 rounded-lg cursor-pointer hover:bg-[#f7f5f0]",
  imageUploadContent: "flex flex-col items-center justify-center pt-3 pb-4",
  imageUploadIcon: "w-7 h-7 text-[#8da1ad] mb-2",
  imageUploadText: "text-sm text-[#708694]",
  imageUploadInput: "hidden",

  // CSV Upload
  csvFileDisplay:
    "flex items-center justify-between p-2 border border-[#071522]/18 rounded-lg",
  csvFileName: "text-sm truncate",
  csvRemoveBtn: "p-1 text-red-500",
  csvUploadLabel:
    "flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-[#071522]/18 rounded-lg cursor-pointer hover:bg-[#f7f5f0]",
  csvUploadContent: "flex flex-col items-center justify-center pt-4 pb-4",
  csvUploadIcon: "w-6 h-6 text-[#8da1ad] mb-1",
  csvUploadText: "text-xs text-[#708694]",
  csvUploadInput: "hidden",

  // Modal Footer
  modalFooter: "flex items-center justify-end gap-3 p-4 border-t",
  modalCancelBtn:
    "px-4 text-sm py-2 cursor-pointer rounded-full border border-[#071522]/12 hover:bg-[#f7f5f0]",
  modalSaveBtn:
    "px-4 py-2 text-sm cursor-pointer rounded-full bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed",
};

export const listRoleQuestionStyles = {
  // Layout
  pageContainer:
    "min-h-screen font-sans bg-linear-to-br from-gray-50 to-gray-100 p-4 sm:p-6",
  toastContainer: "fixed top-20 sm:top-28 right-4 z-50 space-y-2",

  // Success/Info Toast
  baseToast:
    "flex items-center space-x-2 px-4 py-3 rounded-lg shadow-lg text-white transform transition-all duration-300 ease-out animate-slide-in-right",
  toastSuccess: "bg-linear-to-r from-green-500 to-green-600",
  toastInfo: "bg-linear-to-r from-[#126db3] to-blue-600",
  toastMessage: "text-sm font-medium",

  // Delete Confirmation Toast
  confirmToastContainer:
    "bg-white rounded-lg shadow-xl border border-[#071522]/12 p-4 flex items-center space-x-4 min-w-70 sm:min-w-[320px] animate-slide-in-right",
  confirmIconWrapper: "shrink-0",
  confirmIcon: "w-6 h-6 text-amber-500",
  confirmContent: "flex-1",
  confirmTitle: "text-sm font-medium text-[#071522]",
  confirmSubtitle: "text-xs text-[#708694] mt-1",
  confirmActions: "flex space-x-2",
  cancelBtn:
    "px-3 py-1.5 text-xs font-medium text-[#36566a] bg-[#eef4e9] rounded-md hover:bg-[#d7e9f5] transition-all duration-200 hover:shadow",
  deleteConfirmBtn:
    "px-3 py-1.5 text-xs font-medium text-white bg-linear-to-r from-red-500 to-red-600 rounded-md hover:from-red-600 hover:to-red-700 transition-all duration-200 hover:shadow-lg transform hover:scale-105",

  // Header
  title:
    "text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 mb-8",

  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6",
  loadingContainer: "col-span-full flex justify-center py-20",
  spinner: "w-10 h-10 text-[#126db3] animate-spin",
  emptyContainer:
    "col-span-full text-center py-20 bg-white rounded-xl shadow-sm border border-dashed border-[#071522]/18",
  emptyText: "text-[#708694]",

  // Role Card (View Mode)
  cardBase:
    "group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in border-2 border-transparent",
  cardEditingBorder: "editing-border",
  cardHoverBorder: "hover:animated-border",

  // Edit Mode Container
  editContainer: "p-3 sm:p-4 space-y-3 bg-white rounded-xl relative z-10",

  // Image Upload Row
  imageRow:
    "flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-3 sm:space-y-0",
  imagePreviewCircle:
    "relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-[#d7e9f5] to-[#e8f2f9] flex items-center justify-center overflow-hidden shrink-0 ring-2 ring-[#126db3]/25",
  imagePreviewImg: "w-full h-full object-cover",
  imageIcon: "w-5 h-5 text-[#126db3]",
  browseLabel:
    "flex-1 cursor-pointer bg-linear-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-[#36566a] font-medium py-1.5 px-2 rounded-lg text-xs text-center transition-all duration-200 hover:shadow",
  fileInputHidden: "hidden",

  // Form Fields
  formLabel: "block text-xs font-medium text-[#36566a] mb-1",
  formInput:
    "w-full px-2 py-1.5 border border-[#071522]/18 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all",

  // CSV File Row
  csvRow: "flex items-center space-x-1",
  csvDisplaySpan:
    "text-xs text-[#486274] truncate flex-1 px-2 py-1.5 border border-[#071522]/18 rounded-lg bg-[#f7f5f0]",
  csvBrowseLabel:
    "cursor-pointer bg-linear-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 rounded-lg px-2 py-1.5 text-xs font-medium transition-all duration-200 hover:shadow",

  // Edit Actions
  editActions: "flex justify-end space-x-1 pt-1",
  cancelButton:
    "flex cursor-pointer items-center space-x-1 px-2 py-1.5 text-xs font-medium text-[#36566a] bg-linear-to-r from-gray-200 to-gray-300 rounded-lg hover:from-gray-300 hover:to-gray-400 transition-all duration-200 hover:shadow",
  saveButton:
    "flex cursor-pointer items-center space-x-1 px-2 py-1.5 text-xs font-medium text-white bg-linear-to-r from-[#126db3] to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed",
  saveSpinner: "animate-spin",

  // View Mode Container
  viewContainer: "p-3 sm:p-4 bg-white rounded-xl relative z-10",
  viewHeader: "flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-3",
  viewImageCircle:
    "w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-[#d7e9f5] to-[#e8f2f9] flex items-center justify-center overflow-hidden ring-2 ring-[#126db3]/25 shrink-0",
  viewImage: "w-full h-full object-cover",
  viewContent: "flex-1 min-w-0 mt-2 sm:mt-0",
  viewRoleName: "text-sm font-semibold text-[#071522] truncate",
  viewQuestionsCount: "text-xs text-[#708694] flex items-center",
  greenDot: "inline-block w-2 h-2 rounded-full bg-green-400 mr-1",

  // CSV Info
  csvInfoRow:
    "flex items-center space-x-1 text-xs text-[#486274] bg-linear-to-r from-gray-50 to-gray-100 p-1.5 rounded-lg truncate border border-[#071522]/12",
  csvLink: "truncate text-[#126db3] hover:underline",
  csvNoLink: "truncate",

  // Action Buttons
  actionButtons: "flex justify-end space-x-1 mt-3",
  editButton:
    "p-1.5 cursor-pointer text-[#126db3] bg-[#e8f2f9] rounded-lg hover:bg-[#d7e9f5] transition-all duration-200 hover:shadow-md transform hover:scale-110",
  deleteButton:
    "p-1.5 cursor-pointer text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-all duration-200 hover:shadow-md transform hover:scale-110",
};

export const listJobsStyles = {
  // Main container
  container:
    "min-h-screen font-sans bg-linear-to-br from-[#e8f2f9] to-slate-100 p-6",
  contentWrapper: "max-w-7xl mx-auto",

  // Header
  header:
    "flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4",
  headerTitle:
    "text-3xl font-bold bg-linear-to-r from-[#126db3] to-purple-600 bg-clip-text text-transparent",
  headerRight: "flex items-center gap-3 w-full sm:w-auto",

  // Filter
  filterContainer:
    "flex items-center gap-2 bg-white border border-[#071522]/12 px-3 py-2 rounded-lg shadow-sm w-full sm:w-auto",
  filterInput: "outline-none text-sm placeholder:text-[#8da1ad] w-full min-w-0",
  filterClearBtn: "text-[#8da1ad] hover:text-[#486274] shrink-0",

  // Badge
  badgeDefault: "bg-[#eef4e9] text-[#36566a]",
  badgeTech: "bg-[#e8f2f9] text-[#07508b]",
  badgeLocation: "bg-[#e4f4ec] text-[#17756f]",
  badgeBase:
    "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium shadow-sm",
  badgeShrink: "shrink-0",

  // Grid
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch",

  // Job Card
  jobCard:
    "group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#071522]/12 overflow-hidden h-full flex flex-col",
  jobCardGradientBar:
    "absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#126db3] to-[#d7e9f5]0",
  jobCardContent: "p-6 flex-1 flex flex-col",

  // Job Header (Image + Details)
  jobHeader: "flex flex-col sm:flex-row gap-5",
  jobImageContainer: "relative shrink-0 self-center sm:self-start",
  jobImageWrapper:
    "w-24 h-24 rounded-xl overflow-hidden border-2 border-white shadow-md",
  jobImage: "w-full h-full object-cover",
  jobImageBadge:
    "absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md",
  jobImageBadgeIcon: "text-[#126db3]",

  // Job Details
  jobDetails: "flex-1 min-w-0",
  jobTitleRow: "flex items-start justify-between gap-2 flex-wrap",
  jobTitle:
    "text-xl font-bold text-[#071522] group-hover:text-[#126db3] transition-colors",
  jobCompany: "text-[#486274] flex items-center gap-1 mt-0.5",
  jobSalary:
    "text-sm font-semibold text-[#17756f] bg-[#e4f4ec] px-3 py-1 rounded-full whitespace-nowrap",

  // Tech Stack
  techStackContainer: "mt-3 flex flex-wrap gap-1.5",
  techBadge: "max-w-full",

  // Job Meta Info
  jobMetaGrid: "mt-4 grid grid-cols-2 gap-2 text-sm",
  jobMetaItem: "flex items-center gap-1.5 text-[#486274]",
  jobMetaIcon: "text-[#8da1ad] shrink-0",
  jobMetaText: "truncate",

  // Overview
  jobOverview: "mt-3 text-sm text-[#486274] line-clamp-2",

  // Job Sections (Responsibilities, Criteria, Education)
  jobSections:
    "mt-4 pt-4 border-t border-[#071522]/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",
  sectionTitle: "font-semibold text-[#071522] mb-1 flex items-center gap-1",
  sectionIcon: "text-[#126db3] shrink-0",
  sectionList: "list-disc list-inside text-[#486274] space-y-0.5",
  sectionListItem: "truncate",

  // Job Actions
  jobActions: "flex items-center gap-2 mt-auto pt-4",
  editBtn:
    "flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#e8f2f9] text-[#07508b] hover:bg-[#d7e9f5] transition-colors text-sm font-medium",
  applicantsBtn:
    "flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#e4f4ec] text-[#17756f] hover:bg-[#d6f0e2] transition-colors text-sm font-medium",
  deleteBtn:
    "flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors text-sm font-medium",

  // Modal
  modalOverlay: "fixed inset-0 z-50 flex items-start justify-center pt-10 px-4",
  modalBackdrop:
    "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity",
  modalContainer:
    "relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 animate-slideUp ring-1 ring-slate-100",

  // Modal Header
  modalHeader:
    "bg-linear-to-r from-[#126db3] to-purple-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-t-2xl flex items-center justify-between flex-col md:flex-row gap-2 md:gap-0",
  modalTitleContainer: "",
  modalTitle: "text-xl font-bold flex items-center gap-2",
  modalSubtitle: "text-sm text-white/80 mt-1",
  modalCloseBtn: "rounded-full p-1.5 hover:bg-white/20 transition-colors",

  // Modal Content
  modalContent: "p-4 sm:p-6 space-y-6",

  // Section Containers
  sectionContainer: "bg-white p-5 rounded-xl border border-[#071522]/12 shadow-sm",
  sectionContainerLight: "bg-[#f7f5f0] p-5 rounded-xl border border-[#071522]/12",
  sectionHeader:
    "text-sm font-semibold text-[#36566a] mb-4 flex items-center gap-2",
  sectionHeaderIcon: "text-[#126db3]",
  sectionSubHeader:
    "text-sm font-semibold text-[#36566a] mb-2 flex items-center gap-2",

  // Form Grid
  formGrid2: "grid grid-cols-1 md:grid-cols-2 gap-4",

  // Field
  fieldContainer: "mb-2",
  fieldLabel:
    "block text-xs font-medium text-[#708694] mb-1 items-center gap-2",
  fieldWrapper:
    "p-2 rounded-lg border border-transparent bg-white transition-shadow duration-200 ease-in-out focus-within:ring-1 focus-within:ring-[#126db3]/25 focus-within:shadow-lg",

  // Inputs
  input: "w-full rounded-md bg-white border-none outline-none px-2 py-2",
  inputWithBorder:
    "w-full min-w-0 rounded-md bg-white border border-[#071522]/12 px-2 py-2 text-sm",
  select:
    "w-full rounded-md bg-white border-none outline-none px-2 py-2 cursor-pointer",
  textarea: "w-full rounded-md bg-white border-none outline-none px-2 py-2",

  // Image Upload
  imageUploadContainer: "flex flex-col sm:flex-row items-center gap-5",
  imagePreviewWrapper: "relative group",
  imagePreview:
    "w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center",
  imagePreviewImg: "w-full h-full object-cover",
  imageUploadActions: "flex-1 w-full",
  imageUploadButtons: "flex flex-col sm:flex-row items-center gap-3",
  imageUploadText: "flex-1",
  imageUploadInfo: "text-sm text-[#36566a] mb-1",
  imageUploadBrowse: "underline font-medium",
  imageUploadStatus: "text-xs text-[#708694]",
  imageUploadBtnGroup: "flex gap-2",
  browseBtn:
    "px-3 py-2 cursor-pointer rounded-md bg-[#e8f2f9] text-[#07508b] hover:bg-[#d7e9f5] text-sm",
  removeBtn:
    "px-3 cursor-pointer py-2 rounded-md bg-rose-50 text-rose-700 hover:bg-rose-100 text-sm",
  hiddenInput: "hidden",

  // Badge Lists
  badgeList: "flex flex-wrap gap-2 mb-2",
  badgeItem: "inline-flex items-center min-w-0 max-w-full",
  badgeText: "ml-1 break-all whitespace-normal max-w-full",

  // Add Item Input
  addItemContainer: "flex items-center gap-2 flex-wrap",
  addItemInput:
    "flex-1 min-w-0 w-full sm:w-auto rounded-md bg-white border-none outline-none px-2 py-2 text-sm",
  addItemBtn:
    "p-2 bg-[#e8f2f9] text-[#07508b] rounded-lg hover:bg-[#d7e9f5] shrink-0",

  // List Items
  listContainer: "space-y-1 mb-3",
  listItem: "flex items-start gap-2 text-sm text-[#36566a] min-w-0",
  listItemBullet: "text-[#126db3] mt-0.5",
  listItemText: "flex-1 min-w-0 wrap-break-word whitespace-normal",
  listItemRemoveBtn: "text-[#8da1ad] hover:text-red-600 ml-2 shrink-0",

  // Location Edit
  locationItem: "flex items-center gap-2",
  locationInput:
    "flex-1 min-w-0 rounded-md bg-white border border-[#071522]/12 px-2 py-2 text-sm",
  locationSaveBtn:
    "px-3 py-2 rounded-md bg-[#e4f4ec] text-[#17756f] hover:bg-[#d6f0e2] text-sm",
  locationCancelBtn:
    "px-3 py-2 rounded-md bg-[#eef4e9] text-[#36566a] hover:bg-[#d7e9f5] text-sm",
  locationEditBtn: "p-2 rounded-md hover:bg-[#eef4e9] text-[#486274]",
  locationRemoveBtn: "p-2 rounded-md hover:bg-[#eef4e9] text-[#486274]",

  // Salary Input
  salaryContainer: "flex items-center gap-2 flex-wrap",
  salaryAmountInput:
    "w-32 min-w-0 rounded-md bg-white border-none outline-none px-2 py-2",
  salaryPeriodSelect: "rounded-md bg-white border-none outline-none px-2 py-2",

  // Modal Footer
  modalFooter:
    "sticky bottom-0 bg-[#f7f5f0] px-4 sm:px-6 py-4 border-t border-[#071522]/12 flex items-center justify-end gap-3 rounded-b-2xl",
  modalCancelBtn:
    "px-5 py-2.5 rounded-lg border border-[#071522]/18 text-[#36566a] hover:bg-[#eef4e9] transition-colors font-medium",
  modalSaveBtn:
    "px-5 py-2.5 rounded-lg bg-linear-to-r from-[#126db3] to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all font-medium shadow-md flex items-center gap-2",
  modalSaveBtnDisabled: "opacity-70 cursor-not-allowed",

  // Toast
  toastContainer: "fixed right-6 bottom-6 z-50 animate-slideUp",
  toastContent:
    "flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border-l-4",
  toastSuccess: "bg-[#e4f4ec] border-emerald-500 text-emerald-800",
  toastError: "bg-amber-50 border-amber-500 text-amber-800",
  toastIconSuccess: "text-[#17756f]",
  toastIconError: "text-amber-600",
  toastText: "font-medium",

  // Animations
  animations: `
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-slideUp { animation: slideUp 240ms cubic-bezier(0.2, 0.9, 0.2, 1) forwards; }
  `,
};

// Badge variants helper
export const getBadgeClasses = (variant, baseClass) => {
  const variants = {
    default: "bg-[#eef4e9] text-[#36566a]",
    tech: "bg-[#e8f2f9] text-[#07508b]",
    location: "bg-[#e4f4ec] text-[#17756f]",
  };
  return `${baseClass} ${variants[variant] || variants.default}`;
};

export const loginPageStyles = {
  // Layout
  pageContainer:
    "min-h-screen font-sans bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4",

  // Toast
  toastContainer:
    "fixed top-6 right-4 flex items-center gap-3 bg-white rounded-lg shadow-xl p-4 border-l-4 min-w-75 animate-slideInRight z-50",
  toastBorderSuccess: "border-green-500",
  toastBorderError: "border-red-500",
  toastIconSuccess: "text-green-500",
  toastIconError: "text-red-500",
  toastMessage: "flex-1 text-[#36566a]",
  toastCloseBtn:
    "text-[#8da1ad] hover:text-[#486274] transition-transform hover:scale-110",

  // Card
  card: "bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl w-full max-w-md p-8 transform transition-all duration-300 hover:shadow-3xl border border-white/20",

  // Header
  header: "text-center mb-8",
  title: "text-3xl font-bold text-[#071522] animate-fadeInDown",
  subtitle: "text-[#708694] mt-2 animate-fadeInUp",

  // Form
  form: "space-y-6",

  // Form Group
  formGroup: "group",
  label:
    "block text-sm font-medium text-[#36566a] mb-2 transition-colors group-focus-within:text-[#126db3]",

  // Input Wrapper
  inputWrapper: "relative",
  iconWrapper:
    "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  iconDefault:
    "text-[#8da1ad] group-focus-within:text-[#126db3] transition-colors",

  // Input Base
  inputBase:
    "block w-full pl-10 py-3 bg-[#f7f5f0] shadow-md rounded-lg focus:outline-none focus:shadow-lg focus:shadow-blue-200/50 transition-all duration-300 ease-in-out text-[#071522] placeholder-gray-400",
  inputPr3: "pr-3",
  inputPr12: "pr-12",

  // Password Toggle
  eyeButtonWrapper: "absolute inset-y-0 right-0 pr-3 flex items-center",
  eyeButton: "p-1 rounded-md cursor-pointer text-[#126db3]",

  // Submit Button
  submitBtn:
    "w-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-400 to-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-full transform transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-300",
  submitIcon: "transition-transform",
};

export const navbarStyles = {
  // Header
  header: "sticky top-0 z-[100] w-full font-sans",

  // Nav
  nav: "bg-[#e8f2f9]/95 backdrop-blur-xl border-b border-[#071522]/10 shadow-[0_8px_24px_rgba(4,38,64,0.08)]",
  navContainer: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  // Three-zone layout: logo left, nav links centered, user section right
  navContent:
    "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 h-18 lg:h-20",

  // Logo Section
  logoContainer:
    "col-start-1 flex shrink-0 items-center gap-3 group cursor-pointer",
  logoWrapper: "relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white p-1 shadow-sm ring-1 ring-[#071522]/10 transition group-hover:-rotate-3 group-hover:ring-[#126db3]/40",
  logoImage: "w-full h-full rounded-xl object-cover",
  logoFallback:
    "w-full h-full flex items-center justify-center rounded-xl bg-white text-xl font-bold text-[#126db3]",
  logoTextContainer: "flex min-w-0 shrink-0 flex-col",
  logoBrandName:
    "whitespace-nowrap font-bold text-sm leading-tight text-[#071522] xl:text-sm min-[1280px]:text-base",
  logoSubtitle: "whitespace-nowrap text-[10px] uppercase tracking-[0.14em] text-[#486274] min-[1280px]:block",

  // Desktop Navigation
  desktopNav:
    "col-start-2 hidden min-[1280px]:flex min-[1280px]:min-w-0 min-[1280px]:justify-center",
  navIndicatorContainer: "relative max-w-full min-w-0",
  activeIndicator:
    "absolute -bottom-2 h-1 rounded-full bg-[#126db3] transition-all duration-300 ease-out",
  navList: "flex items-center gap-0.5 whitespace-nowrap",

  // Nav Items
  navItem: "relative",
  navItemWrapper: "flex items-center",
  navButton:
    "flex cursor-pointer items-center gap-1.5 rounded-full px-2 py-2 text-[11px] font-bold transition-all duration-200",
  navButtonActive: "text-[#126db3] bg-white/60 shadow-sm",
  navButtonInactive: "text-[#486274] hover:text-[#071522] hover:bg-white/70",
  navButtonIcon: "w-4 h-4",
  navButtonText: "whitespace-nowrap",
  navDropdownIcon: "w-4 h-4 text-[#8da1ad]",

  // Sub Nav Items (XL mode)
  subNavItem: "relative",
  subNavButton:
    "flex cursor-pointer items-center gap-2 px-3 py-2 rounded-full text-xs font-bold transition-all duration-200",
  subNavButtonActive: "text-[#126db3] bg-white/60 shadow-sm",
  subNavButtonInactive: "text-[#486274] hover:text-[#071522] hover:bg-white/70",
  subNavDot: "w-1.5 h-1.5 rounded-full bg-[#6aa9d4]",

  // Dropdown Panel (LG mode)
  dropdownPanel:
    "absolute left-1/2 top-full mt-2 z-50 rounded-xl transition-all duration-150 transform -translate-x-1/2",
  dropdownVisible: "opacity-100 translate-y-0 pointer-events-auto",
  dropdownHidden: "opacity-0 -translate-y-2 pointer-events-none",
  dropdownCaret:
    "absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white shadow-sm",
  dropdownContent: "rounded-xl p-0.5",
  dropdownInner: "bg-white rounded-lg shadow-md overflow-hidden min-w-55",
  dropdownItem:
    "w-full text-left px-4 py-3 text-sm transition-all flex items-center gap-2",
  dropdownItemActive: "bg-[#e8f2f9] text-[#07508b] font-medium",
  dropdownItemInactive: "text-[#36566a] hover:bg-[#f7f5f0]",
  dropdownItemDot: "w-2 h-2 rounded-full bg-[#6aa9d4]",

  // Right Side Actions
  rightActions: "col-start-3 flex shrink-0 items-center gap-3",
  desktopAuth: "hidden md:block lg:block xl:flex items-center gap-3 shrink-0",

  // User Menu
  userMenuContainer: "relative",
  userMenuButton:
    "flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#071522]/12 bg-white/45 text-[#071522] cursor-pointer shadow-sm transition-all duration-200 hover:border-[#126db3]/35",
  userIcon: "w-4 h-4 text-[#126db3]",
  userName: "text-sm font-medium max-w-[140px] truncate",
  userDropdownIcon: "w-4 h-4 text-[#486274]",
  userDropdown:
    "absolute right-0 mt-2 w-48 rounded-xl z-50 overflow-hidden transition-all duration-200 transform origin-top-right",
  userDropdownVisible: "opacity-100 translate-y-0 pointer-events-auto",
  userDropdownHidden: "opacity-0 -translate-y-2 pointer-events-none",
  userDropdownInner: "bg-white rounded-lg shadow-md",
  logoutButton:
    "w-full cursor-pointer text-left px-4 py-3 text-sm text-[#36566a] hover:bg-[#f7f5f0] flex items-center gap-2",
  logoutIcon: "w-4 h-4",

  // Login Button
  loginButton:
    "group cursor-pointer relative overflow-hidden px-5 py-2.5 rounded-full bg-[#126db3] text-white font-bold text-sm shadow-sm hover:bg-[#07508b] transition-all duration-200 active:scale-[0.98]",
  loginButtonOverlay:
    "absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700",
  loginButtonContent: "relative flex items-center gap-2",
  loginIcon: "w-5 h-5",

  // Mobile Menu Button
  mobileMenuButton:
    "flex min-[1280px]:hidden p-2.5 rounded-2xl border border-[#071522]/12 bg-white/55 text-[#071522] hover:bg-white transition-colors",
  mobileMenuIcon: "w-6 h-6",

  // Mobile Menu
  mobileMenu:
    "min-[1280px]:hidden py-4 border-t border-[#071522]/10 bg-[#e8f2f9] animate-slideDown",
  mobileMenuContent: "flex flex-col gap-2",

  // Mobile Nav Items
  mobileNavItem: "space-y-1",
  mobileNavButton:
    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all",
  mobileNavButtonActive: "bg-[#126db3] text-white shadow-sm",
  mobileNavButtonInactive: "text-[#36566a] hover:bg-white/70",
  mobileNavIcon: "w-5 h-5",
  mobileNavText: "text-sm font-medium flex-1",

  // Mobile Dropdown
  mobileDropdown: "ml-8 flex flex-col gap-1 border-l-2 border-[#126db3]/25 pl-2",
  mobileDropdownItem:
    "w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all",
  mobileDropdownItemActive: "bg-[#d7e9f5] text-[#07508b] font-medium",
  mobileDropdownItemInactive:
    "text-[#486274] hover:bg-white/70 hover:text-[#126db3]",

  // Mobile Auth
  mobileUserInfo:
    "mt-4 md:hidden lg:hidden pt-2 border-t border-[#071522]/10 px-4 py-2",
  mobileUserInfoContent: "flex items-center gap-2 text-[#36566a]",
  mobileLogoutButton:
    "w-full md:hidden lg:hidden mt-2 flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-[#d7e9f5] text-[#36566a] font-bold hover:bg-[#c9d5dd] transition-all",
  mobileLoginContainer: "mt-4 pt-2 border-t border-[#071522]/10",
  mobileLoginButton:
    "w-full mt-2 flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-[#126db3] text-white font-bold shadow-sm hover:bg-[#07508b] transition-all",

  // Animations
  animations: `
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-slideDown { animation: slideDown 0.25s ease-out; }

    /* fade & slide (used on the dropdown wrapper) */
    .transition-all { transition-property: opacity, transform; }

    /* Animated gradient border */
    .animated-border {
      background: linear-gradient(90deg, #6366f1, #ec4899, #06b6d4);
      background-size: 300% 100%;
      -webkit-background-clip: padding-box;
      animation: gradientShift 3s linear infinite;
      border-radius: 12px;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .translate-y-0 { transform: translateY(0); }
    .-translate-y-2 { transform: translateY(-8px); }
    .opacity-0 { opacity: 0; }
    .opacity-100 { opacity: 1; }
  `,
};

export const roleQuestionPageStyles = {
  // Layout
  pageContainer:
    "min-h-screen font-sans bg-linear-to-br from-[#e8f2f9] to-[#d7e9f5] p-6 sm:p-4 md:p-6",
  contentWrapper: "max-w-7xl mx-auto",
  title:
    "text-4xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#071522] mb-8",

  // Form Grid
  formGrid:
    "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-10",
  formColumn: "space-y-6",

  // Form Cards
  card: "bg-white rounded-xl shadow-md p-6",
  cardLabel: "flex items-center gap-2 text-lg font-medium text-[#36566a] mb-3",
  labelIcon: "w-5 h-5 text-[#126db3]",
  requiredStar: "text-red-500",
  inputField:
    "w-full px-4 py-3 border border-[#071522]/18 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#126db3]/25 focus:border-transparent transition duration-200",

  // Upload Dropzone
  dropzone:
    "border-2 border-dashed border-[#071522]/18 rounded-lg p-6 text-center cursor-pointer hover:border-[#126db3]/35 transition-colors focus-within:ring-2 focus-within:ring-[#126db3]/25 focus-within:border-transparent",
  previewImage: "max-h-40 mx-auto rounded-lg w-auto",
  uploadIcon: "w-10 h-10 text-[#8da1ad] mx-auto mb-2",
  uploadText: "text-[#708694]",
  uploadHint: "text-[#708694] text-sm",
  fileInputHidden: "hidden",
  csvSuccess: "flex items-center justify-center gap-2 text-[#126db3]",

  // Loading Spinner
  spinnerContainer: "mt-4 flex justify-center",
  spinner: "animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600",

  // Add Button
  buttonContainer: "flex justify-center mb-8",
  addButton:
    "bg-[#126db3] cursor-pointer hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-200 transform focus:outline-none focus:ring-2 focus:ring-[#126db3]/25 focus:ring-offset-2 flex items-center gap-2",
  addButtonDisabled: "opacity-70 cursor-not-allowed",
  buttonSpinner: "w-5 h-5 animate-spin",

  // Questions Section
  questionsSection: "mt-10",
  sectionTitle: "text-2xl font-semibold text-[#071522] mb-4",

  // Questions Grid
  questionsGrid:
    "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",

  // Question Card
  cardAnimation: "card-animation",
  questionCard:
    "group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-5 border border-[#071522]/12 hover:border-[#126db3]/25 relative overflow-hidden",
  cardTopLine:
    "absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#6aa9d4] via-[#e8f2f9]0 to-[#126db3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left",
  questionNumberBadge:
    "absolute top-3 right-3 bg-[#d7e9f5] text-[#07508b] text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm",
  questionTextContainer: "pr-12 mb-3",
  questionText: "font-medium text-[#071522] line-clamp-2",
  answerContainer:
    "mt-2 bg-[#e8f2f9]/70 p-3 rounded-lg text-sm text-[#36566a] border-l-2 border-[#126db3]/30 whitespace-pre-wrap",
  keyPointsContainer: "mt-3 flex flex-wrap gap-1.5",
  keyPointBadge:
    "text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium",
  companiesLabel:
    "mt-4 text-xs text-[#708694] font-medium flex items-center gap-1",
  companiesContainer: "mt-2 flex flex-wrap gap-2",
  companyBadge:
    "bg-[#f7f5f0] px-2 py-1.5 rounded-lg text-xs border border-[#071522]/12 flex items-center gap-1 hover:border-[#126db3]/30 transition-colors",
  companyIcon: "w-3 h-3 text-[#6aa9d4] shrink-0",
  companyName: "font-medium text-[#36566a]",
  separator: "text-[#9eb1bc] mx-0.5",
  calendarIcon: "w-3 h-3 text-[#8da1ad] shrink-0",
  dateText: "text-[#708694]",
  noDataText: "text-[#8da1ad] italic text-xs",
};

export const viewApplicantsPageStyles = {
  // Layout
  pageContainer:
    "min-h-full font-sans bg-linear-to-br from-[#e8f2f9] via-[#e8f2f9]/30 to-[#d7e9f5]/30 pt-8 sm:pt-10 md:pt-12",
  backButton:
    "absolute top-25 lg:top-30 xl:left-15 left-4 p-2 sm:p-3 rounded-full bg-white/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
  backIcon: "w-5 h-5 text-[#126db3]",
  contentWrapper: "max-w-7xl pt-10 mx-auto px-3 sm:px-6 lg:px-8",

  // Header
  headerWrapper: "relative flex items-center justify-center mb-3 sm:mb-4",
  headerTitle:
    "text-2xl sm:text-3xl md:text-3xl font-bold bg-linear-to-r from-[#07508b] to-purple-800 bg-clip-text text-transparent flex items-center gap-2 sm:gap-3",
  headerIcon:
    "w-6 mb-7 md:mb-0 lg:mb-0 xl:mb-0 h-6 sm:w-7 sm:h-7 text-[#126db3]",
  headerText: "leading-tight",

  // Company Badge
  companyWrapper: "flex justify-center mb-8 sm:mb-10",
  companyBadge:
    "inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300",
  companyName: "text-lg sm:text-2xl font-semibold text-[#126db3]",
  activeBadge:
    "flex items-center gap-1 text-xs sm:text-xs text-[#17756f] bg-[#e4f4ec] px-2 py-1 rounded-full",
  activeDot: "w-1.5 h-1.5 rounded-full bg-[#e4f4ec]0 animate-pulse",

  // Applicants Container
  containerCard:
    "bg-white/40 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 border border-white/50 shadow-xl",

  // Loading
  loadingWrapper: "text-center py-12",
  spinner:
    "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto",

  // Empty State
  emptyWrapper: "text-center py-12 sm:py-16",
  emptyIconCircle:
    "inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#d7e9f5] mb-4",
  emptyIcon: "w-6 h-6 sm:w-8 sm:h-8 text-[#6aa9d4]",
  emptyTitle: "text-lg sm:text-xl font-medium text-[#36566a]",
  emptySubtitle: "text-sm text-[#8da1ad] mt-2",

  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6",

  // Applicant Card
  cardBase:
    "group relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-transparent shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col h-full",
  cardInner: "relative flex flex-col items-center text-center h-full z-10",
  applicantName:
    "font-semibold text-lg sm:text-xl text-[#126db3] mb-1 wrap-break-word w-full",
  contactInfo: "space-y-1 w-full mb-2 sm:mb-3",
  contactRow:
    "flex items-center justify-center gap-1 text-sm sm:text-sm text-[#486274]",
  emailIcon: "w-4 h-4 text-[#6aa9d4] shrink-0",
  emailText: "break-all max-w-48 sm:max-w-[18rem]",
  phoneIcon: "w-4 h-4 text-[#17756f] shrink-0",
  detailsWrapper: "space-y-2 w-full mb-4",
  roleRow: "flex items-center justify-center gap-1 text-sm text-[#708694]",
  roleIcon: "w-4 h-4 text-[#6aa9d4] shrink-0",
  roleBadge:
    "font-medium text-[#07508b] bg-[#e8f2f9] px-3 py-1 rounded-full text-xs sm:text-sm",
  dateRow: "flex items-center justify-center gap-1 text-sm text-[#708694]",
  dateIcon: "w-4 h-4 text-amber-400 shrink-0",
  dateBadge:
    "font-medium bg-amber-50 px-3 py-1 rounded-full text-xs sm:text-sm text-amber-700",
  buttonWrapper: "mt-auto pt-2 w-full",
  resumeButton:
    "relative inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 overflow-hidden font-medium text-[#126db3] rounded-full shadow-md group bg-linear-to-r from-[#e8f2f9] to-[#d7e9f5] transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto cursor-pointer",
  resumeButtonInner:
    "relative flex items-center gap-2 text-sm sm:text-sm font-semibold transition-colors duration-300",
  resumeIcon: "w-4 h-4",
  noResumeText: "text-xs text-[#8da1ad] italic",
};
