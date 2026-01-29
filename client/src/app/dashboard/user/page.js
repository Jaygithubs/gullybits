'use client'
import React, { useEffect, useState } from 'react'
import { userService } from '../../../services/user.service';

const UserPage = () => {

  const [users, setUsers] = useState([])
  const fetchUserData = async () => {
    const res = await userService.getAllUsers();
    if (res && res.data) {
      setUsers(res.data);
    }
    else {
      console.error("Failed to fetch user data");
    }
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  return (
    <>
      <div className="card overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[var(--color-primary-light)] text-left">
              <th className="px-4 py-3 text-sm font-semibold text-[var(--color-primary)]">
                Name
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-[var(--color-primary)]">
                Email
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-[var(--color-primary)]">
                Role
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="
            border-b border-[var(--color-border)]
            hover:bg-[var(--color-primary-light)]
            transition-colors duration-200
          "
              >
                <td className="px-4 py-3 text-sm font-medium text-[var(--color-text)]">
                  {user.name}
                </td>

                <td className="px-4 py-3 text-sm text-[var(--color-muted)]">
                  {user.email}
                </td>

                <td className="px-4 py-3 text-sm">
                  <span
                    className="
                inline-block px-3 py-1 rounded-full text-xs font-semibold
                bg-[var(--color-primary-light)]
                text-[var(--color-primary)]
              "
                  >
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default UserPage