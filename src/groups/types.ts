export type Group = {
  id: string;
  name: string;
  owner: { fullName: string };
  members: string[];
};

export interface GroupsListProps {
  isLoading: boolean;
  ListItemComponent: React.ComponentType<{ group: Group }>;
  groups: Group[];
}

export interface GroupItemProps {
  group: Group;
}
