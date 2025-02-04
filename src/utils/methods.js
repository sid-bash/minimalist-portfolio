export const getFileStatus = (status) => {
  const defaultFileStatus = "N/A";
  const fileStatus = {
    approved: "Approved",
    approve: "Approved",
    rejected: "Rejected",
    reject: "Rejected",
  };

  if (!status || typeof status !== "string") return defaultFileStatus;
  return fileStatus[status.toLowerCase()] ?? defaultFileStatus;
};

export const getProcessingStatus = (status) => {
  const defaultProcessingStatus = "Pending";
  const processingStatus = {
    pending: "Pending",
    completed: "Completed",
    processed: "Completed",
  };

  if (!status || typeof status !== "string") return defaultProcessingStatus;
  return processingStatus[status.toLowerCase()] ?? defaultProcessingStatus;
};

export const getCompletionStatus = (status) => {
  const defaultCompletionStatus = "Pending";
  const completionStatus = {
    pending: "Pending",
    completed: "Processed",
    processed: "Processed",
    error: "Error",
  };

  if (!status || typeof status !== "string") return defaultCompletionStatus;
  return completionStatus[status.toLowerCase()] ?? defaultCompletionStatus;
};
