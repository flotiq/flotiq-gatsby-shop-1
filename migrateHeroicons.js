const fs = require("fs");

if (!fs.existsSync("package.json")) {
  console.error(
    "Cannot find package.json. Please run this script in your project directory."
  );
  process.exit(1);
}

const package = fs.readFileSync("package.json", "utf8");

let framework = null;

if (package.includes("heroicons/react")) {
  console.error("Detected heroicons/react...");
  framework = "react";
} else if (package.includes("heroicons/vue")) {
  console.error("Detected heroicons/vue...");
  framework = "vue";
} else {
  console.error(
    "It doesn't look like you have either the heroicons/react or heroicons/vue libraries installed in this project."
  );
  process.exit(1);
}

if (fs.existsSync("yarn.lock")) {
  console.error("Detected yarn. Updating heroicons package to latest...");
  console.log(`yarn add @heroicons/${framework}@latest`);
} else if (fs.existsSync("package-lock.json")) {
  console.error("Detected npm. Updating heroicons package to latest...");
  console.log(`npm install @heroicons/${framework}@latest`);
} else {
  console.error(
    "Error: cannot find evidence of yarn or npm. Please run either 'npm install' or 'yarn install' before using this script."
  );
  process.exit(1);
}

function gsub(from, to) {
  console.log(`echo "${from} => ${to}"`);
  console.log(
    `find . -type f -not -path '*/\.*' -path '*.js' -not -path '*/node_modules/*' -not -path 'migrateHeroicons.js' -exec sed -i 's|${from}|${to}|g' {} +`
  );
}

console.log(`echo "Upgrading import statements..."`);
gsub(`@heroicons/${framework}/solid`, `@heroicons/${framework}/20/solid`);
gsub(`@heroicons/${framework}/outline`, `@heroicons/${framework}/24/outline`);

const heroiconsV1toV2 = {
  AdjustmentsVerticalIcon: "AdjustmentsVerticalIcon",
  ChatBubbleBottomCenterTextIcon: "ChatBubbleBottomCenterTextIcon",
  ArchiveBoxIcon: "ArchiveBoxIcon",
  ArrowDownCircleIcon: "ArrowDownCircleIcon",
  ArrowLeftCircleIcon: "ArrowLeftCircleIcon",
  ArrowRightCircleIcon: "ArrowRightCircleIcon",
  ArrowUpCircleIcon: "ArrowUpCircleIcon",
  ArrowLongDownIcon: "ArrowLongDownIcon",
  ArrowLongLeftIcon: "ArrowLongLeftIcon",
  ArrowLongRightIcon: "ArrowLongRightIcon",
  ArrowLongUpIcon: "ArrowLongUpIcon",
  ArrowsPointingOutIcon: "ArrowsPointingOutIcon",
  ArrowSmallDownIcon: "ArrowSmallDownIcon",
  ArrowSmallLeftIcon: "ArrowSmallLeftIcon",
  ArrowSmallRightIcon: "ArrowSmallRightIcon",
  ArrowSmallUpIcon: "ArrowSmallUpIcon",
  CheckBadgeIcon: "CheckBadgeIcon",
  NoSymbolIcon: "NoSymbolIcon",
  BookmarkSquareIcon: "BookmarkSquareIcon",
  BanknotesIcon: "BanknotesIcon",
  ChartBarSquareIcon: "ChartBarSquareIcon",
  ChatBubbleLeftRightIcon: "ChatBubbleLeftRightIcon",
  ChatBubbleLeftEllipsisIcon: "ChatBubbleLeftEllipsisIcon",
  ChatBubbleOvalLeftEllipsisIcon: "ChatBubbleOvalLeftEllipsisIcon",
  CpuChipIcon: "CpuCpuChipIcon",
  ClipboardDocumentCheckIcon: "ClipboardDocumentCheckIcon",
  ClipboardDocumentIcon: "ClipboardDocumentIcon",
  ClipboardDocumentListIcon: "ClipboardDocumentListIcon",
  CloudArrowDownIcon: "CloudArrowDownIcon",
  CloudArrowUpIcon: "CloudArrowUpIcon",
  CodeBracketIcon: "CodeBracketIcon",
  RectangleStackIcon: "RectangleStackIcon",
  SwatchIcon: "SwatchIcon",
  CursorArrowRaysIcon: "CursorArrowRaysIcon",
  CircleStackIcon: "CircleStackIcon",
  ComputerDesktopIcon: "ComputerDesktopIcon",
  DevicePhoneMobileIcon: "DevicePhoneMobileIcon",
  DocumentPlusIcon: "DocumentPlusIcon",
  DocumentArrowDownIcon: "DocumentArrowDownIcon",
  DocumentMinusIcon: "DocumentMinusIcon",
  DocumentChartBarIcon: "DocumentChartBarIcon",
  DocumentMagnifyingGlassIcon: "DocumentMagnifyingGlassIcon",
  EllipsisHorizontalCircleIcon: "EllipsisHorizontalCircleIcon",
  EllipsisHorizontalIcon: "EllipsisHorizontalIcon",
  EllipsisVerticalIcon: "EllipsisVerticalIcon",
  ArrowDownTrayIcon: "ArrowDownTrayIcon",
  Square2StackIcon: "Square2StackIcon",
  FaceSmileIcon: "FaceSmileIcon",
  FaceFrownIcon: "FaceFrownIcon",
  ExclamationTriangleIcon: "ExclamationTriangleIcon",
  ArrowTopRightOnSquareIcon: "ArrowTopRightOnSquareIcon",
  EyeSlashIcon: "EyeSlashIcon",
  ForwardIcon: "ForwardIcon",
  FunnelIcon: "FunnelIcon",
  FolderPlusIcon: "FolderPlusIcon",
  FolderArrowDownTrayIcon: "FolderArrowDownIcon",
  FolderMinusIcon: "FolderMinusIcon",
  GlobeAmericasIcon: "GlobeAmericasIcon",
  HandRaisedIcon: "HandRaisedIcon",
  InboxArrowDownIcon: "InboxArrowDownIcon",
  BuildingLibraryIcon: "BuildingBuildingLibraryIcon",
  BoltIcon: "BoltIcon",
  MapPinIcon: "MapPinIcon",
  ArrowLeftOnRectangleIcon: "ArrowLeftOnRectangleIcon",
  ArrowRightOnRectangleIcon: "ArrowRightOnRectangleIcon",
  EnvelopeIcon: "EnvelopeIcon",
  EnvelopeOpenIcon: "EnvelopeOpenIcon",
  Bars3CenterLeftIcon: "Bars3CenterLeftIcon",
  Bars3BottomLeftIcon: "Bars3BottomLeftIcon",
  Bars3BottomRightIcon: "Bars3BottomRightIcon",
  Bars2Icon: "Bars2Icon",
  Bars3Icon: "Bars3Icon",
  MinusSmallIcon: "MinusSmallIcon",
  MusicalNoteIcon: "MusicalNoteIcon",
  BuildingOfficeIcon: "BuildingOfficeIcon",
  PencilSquareIcon: "PencilSquareIcon",
  PhoneArrowDownLeftIcon: "PhoneArrowDownLeftIcon",
  PhoneXMarkIcon: "PhoneXMarkIcon",
  PhoneArrowUpRightIcon: "PhoneArrowUpRightIcon",
  PhotoIcon: "PhotoIcon",
  PlusSmallIcon: "PlusSmallIcon",
  PuzzlePieceIcon: "PuzzlePieceIcon",
  QrCodeIcon: "QrCodeBracketIcon",
  ReceiptPercentIcon: "ReceiptPercentIcon",
  ArrowPathIcon: "ArrowPathIcon",
  ArrowUturnLeftIcon: "ArrowUturnLeftIcon",
  BackwardIcon: "BackwardIcon",
  ArrowDownOnSquareStackIcon: "ArrowDownOnSquareStackIcon",
  ArrowDownOnSquareIcon: "ArrowDownOnSquareIcon",
  MagnifyingGlassCircleIcon: "MagnifyingGlassCircleIcon",
  MagnifyingGlassIcon: "MagnifyingGlassIcon",
  ChevronUpDownIcon: "ChevronUpDownIcon",
  BarsArrowUpIcon: "BarsArrowUpIcon",
  BarsArrowDownIcon: "BarsArrowDownIcon",
  MegaphoneIcon: "MegaphoneIcon",
  SignalSlashIcon: "SignalSlashIcon",
  SignalIcon: "SignalIcon",
  LifebuoyIcon: "LifebuoyIcon",
  ArrowsRightLeftIcon: "ArrowsRightLeftIcon",
  ArrowsUpDownIcon: "ArrowsUpDownIcon",
  TableCellsIcon: "TableCellsIcon",
  RectangleGroupIcon: "RectangleGroupIcon",
  CommandLineIcon: "CommandLineIcon",
  HandThumbDownIcon: "HandHandThumbDownIcon",
  HandThumbUpIcon: "HandHandThumbUpIcon",
  LanguageIcon: "LanguageIcon",
  ArrowTrendingDownIcon: "ArrowArrowTrendingDownIcon",
  ArrowTrendingUpIcon: "ArrowArrowTrendingUpIcon",
  ArrowUpTrayIcon: "ArrowUpTrayIcon",
  UserPlusIcon: "UserPlusIcon",
  UserMinusIcon: "UserMinusIcon",
  ViewColumnsIcon: "ViewColumnsIcon",
  SquaresPlusIcon: "SquaresPlusIcon",
  Squares2X2Icon: "Squares2X2Icon",
  Bars4Icon: "Bars4Icon",
  SpeakerXMarkIcon: "SpeakerXMarkIcon",
  SpeakerWaveIcon: "SpeakerWaveIcon",
  XMarkIcon: "XMarkIcon",
  MagnifyingGlassPlusIcon: "MagnifyingGlassPlusIcon",
  MagnifyingGlassMinusIcon: "MagnifyingGlassMinusIcon",
};

console.log(`echo "Upgrading icon names..."`);
Object.entries(heroiconsV1toV2).map(([from, to]) => {
  gsub(from, to);
});

console.log(
  `echo "Done. You can thank https://twitter.com/cgenco and https://twitter.com/KevinPicchi for saving you so much time :)"`
);