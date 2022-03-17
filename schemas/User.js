import { MdAccountCircle } from "react-icons/md";
import React from 'react'

export default {
    title: 'User',
    name: 'user',
    icon: MdAccountCircle,
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Discord name',
            name: 'discordName',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: "Avatar",
            name: "avatar",
            type: "reference",
            to: [{ type: "avatar" }],
        },
        {
            title: 'Email',
            name: 'email',
            type: 'string'
        },
        {
            title: 'Discord avatar URL',
            name: 'avatarURL',
            type: 'string'
        },
        {
            title: 'Roles',
            name: 'roles',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200
            }
        },
    ],
    preview: {
        select: {
            name: 'name',
            avatar: 'avatar.image',
            role0: 'roles.0.name',
            role1: 'roles.1.name',
            role2: 'roles.2.name',
            role3: 'roles.3.name',
        },
        prepare(selection) {
            const { name, avatar, role0, role1, role2, role3 } = selection
            const roles = [role0, role1, role2].filter(Boolean)
            const subtitle = roles.length > 0 ? `${roles.join(', ')}` : ''
            const hasMoreRoles = Boolean(role3)
            return {
                title: name,
                subtitle: hasMoreRoles ? `${subtitle}…` : subtitle,
                media: avatar
            }
        },
    }
}
