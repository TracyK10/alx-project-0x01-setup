import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="mt-2 text-gray-700">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-gray-700">
        <strong>Phone:</strong> {phone}
      </p>
      <p className="text-gray-700">
        <strong>Website:</strong> {website}
      </p>
      <p className="text-gray-700">
        <strong>Company:</strong> {company.name}
      </p>
      <p className="text-gray-700">
        <strong>Address:</strong> {address.suite}, {address.street},{" "}
        {address.city}
      </p>
    </div>
  );
};

export default UserCard;
