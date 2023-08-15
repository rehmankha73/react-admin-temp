import { Card } from "@nextui-org/react";
import {
  ArrowPathIcon,
  BriefcaseIcon,
  ChatBubbleBottomCenterIcon,
  CpuChipIcon,
  FolderIcon,
  DocumentIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/20/solid/index.js";

// eslint-disable-next-line react/prop-types
export function StatisticCard({ title }) {
  return (
    <Card className="flex flex-row justify-between items-center px-4 min-h-[100px] h-full">
      <div className="flex flex-col h-full justify-between py-4">
        <p className="text-[12px] flex-1 font-bold mb-4">{title}</p>
        <p className="text-2xl font-bold text-default-500">1500</p>
      </div>

      {getIcon(title)}
    </Card>
  );
}

function getIcon(title) {
  switch (title) {
    case "Total Jobs":
      return <BriefcaseIcon width={30} className="text-sftpRoseStart" />;
    case "Total Runs":
      return <CpuChipIcon width={30} className="text-sftpRoseStart" />;
    case "Successful Runs":
      return <ArrowPathIcon width={30} className="text-sftpRoseStart" />;
    case "Failed Runs":
      return (
        <ChatBubbleBottomCenterIcon width={30} className="text-sftpRoseStart" />
      );
    case "Total Sub Folders":
      return <FolderIcon width={30} className="text-sftpRoseStart" />;
    case "Total Files":
      return <DocumentIcon width={30} className="text-sftpRoseStart" />;
    case "Duplicate Runs":
      return (
        <DocumentDuplicateIcon width={30} className="text-sftpRoseStart" />
      );
  }
}
